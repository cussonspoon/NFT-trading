import Layout from "../components/Layout";
import NFTDetails from "../components/Nft_details_page/NFT_details";
import NFTActions from "../components/Nft_details_page/NFT_actions";
import NFTImage from "../components/Nft_details_page/NFT_image";
import ItemActivity from "../components/Nft_details_page/item_activity";
import { FaShareAlt } from "react-icons/fa";

const NFTPage = () => {
  const fetchAsset = async () => {
    console.log("Fetching asset...");
  };

  const handleShare = () => {
    console.log("Share clicked");
    const current_url = window.location.href;
    navigator.clipboard.writeText(current_url).then(() => {
      console.log("URL copied to clipboard");
    });
  };

  const sampleNFT = {
    title: "Cunny pics",
    owner: "Sensei",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: "/nft/nft1.jpg",
    price: 6.3,
    tag: ["Cunny", "Art", "PFP"]
  };

  return (
    <Layout>
      <div className="min-h-screen text-white justify-center w-full overflow-x-hidden pt-20 px-36">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Left Section */}
          <NFTImage
            imageSrc={sampleNFT.imageSrc || "/nft/nft1.jpg"}
            className="max-w-full"
            width="w-full"
          />

          {/* Right Section */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <NFTDetails
              title={sampleNFT.title}
              owner={sampleNFT.owner}
              description={sampleNFT.description}
              tag={sampleNFT.tag}
              renderHeader={() => (
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-zinc-800 border border-zinc-400 hover:bg-gray-700"
                  aria-label="Share"
                >
                  <FaShareAlt className="text-xl" />
                </button>
              )}
            />
            <NFTActions
              price="6.3"
              onBuyNow={fetchAsset}
              onMakeOffer={() => console.log("Make offer clicked")}
            />
          </div>
        </div>
        <div className="mt-10">
        <ItemActivity/>
        </div>
      </div>
    </Layout>
  );
};

export default NFTPage;
