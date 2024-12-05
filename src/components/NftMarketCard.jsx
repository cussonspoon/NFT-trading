
const NftMarketCard = ({ onClick, nftData = {} }) => {
    const {
        name = 'Unnamed NFT', 
        price = 0, 
        owner = 'Unknown', 
        img = '/nft/nft1.jpg'
    } = nftData;

    return (
        <div 
        onClick={onClick}
        className="w-80 h-72 rounded-2xl relative overflow-hidden transform transition duration-500 hover:scale-95"
        >
            <img 
                className="object-cover w-full h-full absolute top-0 left-0 z-0" 
                src={img || '/nft/nft1.jpg'} 
                alt={name} 
            />
            
            <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-70 text-white p-3 z-10">
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="text-sm">Price</h2>
                            <h2 className="text-lg font-semibold">{price} ETH</h2>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-sm">Owner</h2>
                            <h2 className="text-lg font-semibold">{owner}</h2>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default NftMarketCard;
