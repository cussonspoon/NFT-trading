const NFTActions = ({ price, onBuyNow, onMakeOffer }) => {
    return (
        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700">
            <p className="text-gray-400 text-sm">Current Price</p>
            <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">{price} USDC</p>
                <div className="flex gap-4">
                    <button
                        onClick={onBuyNow}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
                    >
                        Buy Now
                    </button>
                    <button
                        onClick={onMakeOffer}
                        className="border border-gray-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
                    >
                        Make Offer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NFTActions;
