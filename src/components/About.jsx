

const About = () => {
    return (
        <div className="flex w-full justify-evenly px-10 text-white mb-5">

            <div className="flex flex-col items-center w-1/4 h-60">
                <img className="w-24 h-24" src="/home/metamask.png" alt="" />
                <h1 className="text-2xl mt-3">Set Up Your Wallet</h1>
                <h2>Click on Wallet connect on the menubar to connect to your Metamask wallet</h2>
            </div>

            <div className="flex flex-col items-center w-1/4 h-60">
                <img className="w-28 h-24" src="/home/buy.png" alt="" />
                <h1 className="text-2xl mt-3">Add Your NFT</h1>
                <h2>Start buying your NFT, if you bid one, you will get it if you win the bid</h2>
            </div>

            <div className="flex flex-col items-center w-1/4 h-60">
                <img className="w-24 h-24" src="/home/sell.png" alt="" />
                <h1 className="text-2xl mt-3">List Them For Sale</h1>
                <h2>You can start making money buy list your NFT for sales</h2>
            </div>
        </div>
    ); 
}

export default About; 