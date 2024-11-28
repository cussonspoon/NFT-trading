//SPX-License-Identifier: MIT
pragma solidity ^0.8.4;

//INTERNAL IMPORT FROM OPENZEPPELIN
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 0.0025 ether; 

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem; 

    struct MarketItem{
        uint256 tokenId;
        address payable seller; //one who creates NFT
        address payable owner;
        uint256 price;
        bool sold;
    }

    //to trigger when transaction occurs: buying/ selling 
    event MarketItemCreated(
        uint256 indexed tokenId, 
        address seller, 
        address owner, 
        uint256 price, 
        bool sold
    ); 

    modifier onlyOwner() {
        require(
            msg.sender == owner, 
            "only owner of the marketplace can change the listing price"
        ); 
        _;
    }

    constructor() ERC721("NFT Token", "MyNFT"){
        owner == payable(msg.sender);
    }

    //paying extra charge to owner of marketplace : me
    function updateListingPrice(uint256 _listingPrice) 
        public 
        payable
        onlyOwner 
    {
        listingPrice = _listingPrice; 
    }

    //for checking cost when creating NFT
    //view = read state variable
    function fetchListingPrice() 
        public
        view
        returns(uint256)
    {
        return listingPrice;
    }
 
    //create NFT token, return token id
    //msg = address that call this fn 
    function createToken(string memory tokenURI, uint256 price)
        public 
        payable
        returns(uint256)
    {   
        _tokenIds.increment(); 

        uint256 newTokenId = _tokenIds.current();
        //openzeppelin function
        _mint(msg.sender, newTokenId); //assign ownership of NFT to msg.sender
        _setTokenURI(newTokenId, tokenURI); //associate the provided metadata with the token

        createMarketItem(newTokenId, price); 

        return newTokenId;
    }

    //create market item
    function createMarketItem(uint256 tokenId, uint256 price) 
        private
    {
        require(price > 0, "Price must be at least 1 wei");
        require(msg.value == listingPrice, "Price must be equal to listing price"); //amount of ether sent must be equal to listing price

        idMarketItem[tokenId] = MarketItem(
            tokenId, 
            payable(msg.sender), //NFT seller
            payable(address(this)), //owner of NFT
            price, 
            false // not sold
        ); 

        _transfer(msg.sender, address(this), tokenId); //send NFT to marketplace

        emit MarketItemCreated( //trigger event
            tokenId, 
            msg.sender, 
            address(this), 
            price, 
            false
        ); 
    }

    //resale NFT
    function reSellToken(uint256 tokenId, uint256 price)
        public
        payable 
    {
        require(idMarketItem[tokenId].owner == msg.sender, "only the owner can resale the NFT");

        require(msg.value == listingPrice, "Price must be equal to listing price");

        idMarketItem[tokenId].sold = false; 
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId); 
    }

    //buy NFT
    function createMarketSale(uint256 tokenId) 
        public 
        payable
    {
        uint256 price = idMarketItem[tokenId].price; 
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        idMarketItem[tokenId].owner = payable(msg.sender); 
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0)); 

        _itemsSold.increment();

        _transfer(address(this), msg.sender, tokenId); 

        payable(owner).transfer(listingPrice); //send listing price to owner of marketplace
        payable(idMarketItem[tokenId].seller).transfer(msg.value);//send sale to original seller
    }

    //Get unsold nfts data
    function fetchMarketItem()
        public 
        view 
        returns(MarketItem[] memory)
    {
        uint256 itemCount = _itemsSold.current(); 
        uint256 unSoldItemCount = _tokenIds.current() - itemCount;  
        uint256 currentIndex = 0; 

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for(uint256 i = 0; i < itemCount; i++){
            if(idMarketItem[i+1].owner == address(this)){
                items[currentIndex] = idMarketItem[i+1]; 
                currentIndex += 1;
            }
        }
        return items; 
    }

    //Get my nfts data
    function fetchMyNFT()
        public 
        view
        returns(MarketItem[] memory)
    {
        uint256 itemCount = _itemsSold.current(); 
        uint256 myItemCount = 0; 

        for(uint256 i = 0; i < itemCount; i++){
            if(idMarketItem[i+1].owner == msg.sender){  
                myItemCount += 1;
            }
        }

        MarketItem[] memory myItems = new MarketItem[](myItemCount);
        uint256 currentIndex = 0; 

        for(uint256 i = 0; i < itemCount; i++){
            if(idMarketItem[i+1].owner == msg.sender){
                myItems[currentIndex] = idMarketItem[i+1]; 
                currentIndex += 1;
            }
        }

        return myItems;
    }

    //get seller items
    function fetchItemsListed()
        public 
        view
        returns(MarketItem[] memory)
    {
        uint256 totalCount = _tokenIds.current(); 
        uint256 itemCount = 0; 
        uint256 currentIndex = 0; 

        for(uint256 i = 0;  i < totalCount; i++){
            if(idMarketItem[i+1].seller == msg.sender){
                itemCount += 1; 
            }
        }

        MarketItem[] memory sellerItems = new MarketItem[](itemCount);

        for(uint256 i = 0; i < itemCount; i++){
            if(idMarketItem[i+1].seller == msg.sender){
                sellerItems[currentIndex] = idMarketItem[i+1]; 
                currentIndex += 1;
            }
        }

        return sellerItems;
    }

}



