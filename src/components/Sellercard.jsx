const SellerCard = ({onClick}) => {
    return (
        // <div className={`w-${width} h-${height} rounded-2xl relative overflow-hidden`}>
        <div 
        onClick={onClick}
        className="w-80 h-72 rounded-2xl relative overflow-hidden transform transition duration-500 hover:scale-95"
        >
            <img className="object-cover w-full h-full absolute top-0 left-0 z-0" src="/nft/nft1.jpg" alt="NFT" />
            
            <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-70 text-white p-3 z-10">
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">Super Yeti</h1>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="text-sm">Floor</h2>
                            <h2 className="text-lg font-semibold">2 ETH ($5,590)</h2>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-sm">Total volume</h2>
                            <h2 className="text-lg font-semibold">2 ETH ($5,590)</h2>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default SellerCard;