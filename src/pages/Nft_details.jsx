import Layout from "../components/Layout";
import NFTDetails from "../components/Nft_details_page/NFT_details";
import NFTActions from "../components/Nft_details_page/NFT_actions";
import NFTImage from "../components/Nft_details_page/NFT_image";
import ItemActivity from "../components/Nft_details_page/item_activity";
import { FaShareAlt } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";

const NFTPage = () => {
  const nft_id = 1;
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [owner, setOwner] = useState(null);

  const fetchOwner = async (owner_id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/user/${owner_id}`); // unauthorized
      return response.data;
    }
    catch (err) {
      console.error("Error fetching owner data:", err);
      return null;
    }
  };

  useEffect(() => {
    if (nft) {
      fetchOwner(nft.owner_id).then((owner) => {
        setOwner(owner);
      });
    }
  }, [nft]);

  const fetchAsset = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/nft/${nft_id}`);
      setNft(response.data);
    } catch (err) {
      console.error("Error fetching NFT data:", err);
      setError("Failed to fetch NFT data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAsset();
  }, []); // Fetch data on component mount

  const handleShare = () => {
    console.log("Share clicked");
    const current_url = window.location.href;
    navigator.clipboard.writeText(current_url).then(() => {
      console.log("URL copied to clipboard");
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // const sampleNFT = {
  //   title: "Cunny pics",
  //   owner: "Sensei",
  //   description:
  //     "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   imageSrc: "/nft/nft1.jpg",
  //   price: 6.3,
  // };

  return (
    <Layout>
      <div className="min-h-screen text-white justify-center w-full overflow-x-hidden pt-20 px-36">
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 mx-auto max-w-7xl">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex-shrink-0">
          <NFTImage
            imageSrc={nft.img_url || "/nft/nft1.jpg"}
            // className="max-w-full"
            width="w-full"
          />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <NFTDetails
              title={nft.name}
              owner={nft.owner || "No owner"}
              description={nft.description || "lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
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
              price={nft.price}
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