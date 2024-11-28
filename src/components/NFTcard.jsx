const NFTcard = ({width, height, img}) => {
    return (
        // <div className={`w-${width} h-${height} rounded-2xl relative overflow-hidden`}>
        <div className="w-3/4 h-4/5 rounded-2xl relative overflow-hidden">
            <img className="object-cover w-full h-full absolute top-0 left-0 z-0" src="/nft/nft1.jpg" alt="NFT" />
            
            {/* Card details with a transparent background */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-5 z-10">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold">Super Yeti</h1>
                <div className="flex justify-between items-center mt-3">
                <div className="flex flex-col">
                    <h2 className="text-sm">Starter bid:</h2>
                    <h2 className="text-lg font-semibold">2 ETH ($5,590)</h2>
                </div>
                <button className="p-2 px-5 border border-white rounded-3xl hover:bg-white hover:text-black transition">
                    PLACE BID
                </button>
                </div>
            </div>
            </div>
       </div>
    );
}

export default NFTcard;