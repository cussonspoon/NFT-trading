import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import NFTDetails from "../components/Nft_details_page/NFT_details";
import NFTActions from "../components/Nft_details_page/NFT_actions";
import NFTImage from "../components/Nft_details_page/NFT_image";

// const Nft_details = () => {
//     return (
//         <Layout>
//         <div className="min-h-screen bg-gray-900 text-white">
//             {/* Page Container */}
//             <div className="max-w-6xl mx-auto p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-40">
//                     {/* Left Section */}
//                     <div className="relative">
//                         <div className="bg-white rounded-lg shadow-md">
//                             <img
//                                 className="w-full rounded-lg"
//                                 src="/nft/nft1.jpg" 
//                                 alt="NFT Artwork"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Section */}
//                     <div>
//                         {/* Title and Owner Info */}
//                         <h1 className="text-3xl font-bold mb-4">2022 Topps Triple Threads</h1>
//                         <p className="text-gray-400 mb-2">Owned by <span className="text-blue-500">1EADA4</span></p>

//                         {/* Sale Information */}
//                         <div className="bg-gray-800 p-4 rounded-lg mb-6">
//                             <p className="text-gray-400 text-sm">Sale ends:</p>
//                             <p className="text-lg font-semibold">January 8, 2025 at 11:02 PM</p>
//                         </div>

//                         {/* Current Price and Actions */}
//                         <div className="bg-gray-800 p-4 rounded-lg">
//                             <p className="text-gray-400 text-sm">Current Price</p>
//                             <div className="flex items-center justify-between">
//                                 <p className="text-2xl font-bold">6.3 USDC</p>
//                                 <div className="flex gap-4">
//                                     <button
//                                         // onClick={fetchAsset}
//                                         className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
//                                     >
//                                         Buy Now
//                                     </button>
//                                     <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
//                                         Make Offer
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Price History */}
//                         <div className="mt-6">
//                             <h2 className="text-lg font-semibold mb-2">Price History</h2>
//                             <div className="bg-gray-800 p-4 rounded-lg">
//                                 {/* Placeholder for Chart */}
//                                 <p className="text-gray-400">Chart data goes here...</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </Layout>
//     );
//     }

// export default Nft_details;

const NFTPage = () => {
    const fetchAsset = async () => {
        console.log('Fetching asset...');
    };

    return (
        <Layout>
        <div className="min-h-screen bg-gray-900 text-white justify-center">
            <div className="p-3">
                <div className="grid grid-cols-2 mt-32 justify-items-center">
                    {/* Left Section */}
                    <NFTImage 
                    imageSrc="/nft/nft1.jpg" 
                    width="w-4/5"
                    // height="h-4/5"
                    />

                    {/* Right Section */}
                    <div className="mr-10">
                        <NFTDetails
                            title="2022 Topps Triple Threads"
                            owner="1EADA4"
                            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        <NFTActions
                            price="6.3"
                            onBuyNow={fetchAsset}
                            onMakeOffer={() => console.log('Make offer clicked')}
                        />
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default NFTPage;
