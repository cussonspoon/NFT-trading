import Salecard from "../components/Salecard";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Search from "../components/search";
import Filter from "../components/filter";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sample_nfts_collect = [
  {
    name: "Galaxy Explorer",
    owner: "StarGazer42",
    img: "",
    status: "Collect",
    price: 500,
    created_at: "Feb 14, 2023",
    sold: false,
  },
  {
    name: "Cyberpunk Kitten",
    owner: "TechCat99",
    img: "",
    status: "Collect",
    price: 350,
    created_at: "Mar 3, 2024",
    sold: false,
  },
  {
    name: "Pixel Samurai",
    owner: "NeoWarrior",
    img: "",
    status: "Collect",
    price: 400,
    created_at: "Dec 20, 2023",
    sold: true,
  },
  {
    name: "Ethereal Forest",
    owner: "NatureLover",
    img: "",
    status: "Collect",
    price: 600,
    created_at: "Apr 10, 2022",
    sold: true,
  },
  {
    name: "Astronaut Ape",
    owner: "SpaceBanana",
    img: "",
    status: "Collect",
    price: 250,
    created_at: "Jun 15, 2023",
    sold: false,
  },
  {
    name: "Futuristic Skyline",
    owner: "UrbanDreamer",
    img: "",
    status: "Collect",
    price: 700,
    created_at: "Sep 1, 2024",
    sold: true,
  },
  {
    name: "Neon Dragon",
    owner: "BrightBeast",
    img: "",
    status: "Collect",
    price: 800,
    created_at: "Oct 10, 2023",
    sold: false,
  },
  {
    name: "Retro Racer",
    owner: "SpeedKing",
    img: "",
    status: "Collect",
    price: 450,
    created_at: "Jul 25, 2023",
    sold: false,
  },
  {
    name: "Mystic Wolf",
    owner: "LunarHowl",
    img: "",
    status: "Collect",
    price: 300,
    created_at: "Jan 5, 2024",
    sold: true,
  },
  {
    name: "Crypto Panda",
    owner: "BearMarket",
    img: "",
    status: "Collect",
    price: 350,
    created_at: "Nov 18, 2022",
    sold: false,
  },
];

const sample_user_profile = 
  {
    ID : "u89124391237u498d7h19827nfhghdhj",
    username : "Teemy17",
    Metamask_account : "Teemy_wallet",
    Profile_description : "I want to buy nfts and watch it go to the moon lmao Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam laborum, atque, ratione in totam ab voluptas doloremque quo nulla libero ipsa debitis eaque dolor illum asperiores quis repellat, dolores eos?",
    Profile_img : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg",
    Inventory : sample_nfts_collect,
    Onsale : sample_nfts_collect,
    Total_Volume : 123,
    Tags_id : "..."

  }

export const Button = ({ name, setMode, mode }) => {
  const isActive = mode === name;

  return (
    <button
      onClick={() => {
        isActive ? setMode("") : setMode(name);
      }}
      className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group ${
        isActive
          ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
          : "text-white bg-white group-hover:bg-gradient-to-br from-purple-500 to-pink-500 group-hover:text-white"
      }`}
    >
      <span
        className={`relative px-5 py-2.5 text-lg transition-all ease-in duration-75 rounded-full ${
          isActive ? "bg-transparent" : "bg-white dark:bg-gray-900"
        }`}
      >
        {name}
      </span>
    </button>
  );
};

export const NftMarketCard = ({ onClick, nftData = {} }) => {
  const navigate = useNavigate();
  const {
    name = "Unnamed NFT",
    price = 0,
    owner = "Unknown",
    img = "/nft/nft1.jpg",
  } = nftData;

  return (
    <div
      onClick={onClick}
      className="w-80 h-72 rounded-2xl relative overflow-hidden transform transition duration-500 hover:scale-95 group"
    >
      {/* Background Image */}
      <img
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
        src={img || "/nft/nft1.jpg"}
        alt={name}
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center">
        {/* View on Marketplace Button */}
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering card's `onClick`
            alert(`Viewing ${name} on the marketplace`);
          }}
        >
          View on Marketplace
        </button>
      </div>

      {/* Card Details */}
      <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-70 text-white p-3 z-20">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-sm">Price</h2>
              <h2 className="text-lg font-semibold">{price} ETH</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm">Owner</h2>
              <h2
                className="text-lg font-semibold cursor-pointer hover:underline"
                onClick={() => navigate(`/artist/${owner}`)}
              >{owner}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// const UserreSalecard = ({img, name }) => {
//     return (
//       <div className="w-60 h-96 rounded-2xl relative overflow-hidden group mb-3">
//         {/* Background Image */}
//         <img
//           className="object-cover w-full h-full absolute top-0 left-0 z-0"
//           src={img || "/nft/nft1.jpg"}
//           alt="NFT"
//         />

//         {/* Card Details */}
//         <div className="absolute bottom-0 w-full h-28 bg-black bg-opacity-50 text-white p-4 z-10">
//           <div className="absolute bottom-8 flex flex-col">
//             <h1 className="text-xl font-bold">{name}</h1>
//             <div className="flex justify-between items-center mt-2">
//               <div className="flex flex-col">
//                 <h2 className="text-md font-semibold pb-3">2 ETH ($5,590)</h2>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Buy Now Button (Hidden by Default) */}
//         <div className="absolute bottom-[-3rem] w-full bg-blue-500 text-white text-center p-2 z-20 transition-all duration-500 ease-in-out group-hover:bottom-0">
//           Resell
//         </div>
//       </div>
//     );
// };

const UserProfile = () => {
  const [mode, setMode] = useState("Collection");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const getUser = async () => {
    const response = await axios.get("http://127.0.0.1:8000/user/me");
  };

  const sorted_data = [...sample_user_profile.Inventory].sort((a, b) => {
    switch (mode) {
      case "Oldest":
        return new Date(a.created_at) - new Date(b.created_at); // Ascending by date
      case "Newest":
        return new Date(b.created_at) - new Date(a.created_at); // Descending by date
      case "Ascending":
        return a.price - b.price; // Ascending by price
      case "Descending":
        return b.price - a.price; // Descending by price
      default:
        return 0; // No sorting
    }
  }).filter(
    (nft) =>
      nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Layout>
      <div className="relative w-full min-h-screen bg-zinc-900 overflow-auto">
        {/* Banner Image */}
        <div className="w-screen h-96">
          <img
            className="object-cover w-full h-full"
            src="/artist/banner.webp"
            alt=""
          />
          <div className="absolute top-0 h-96 w-full bg-gradient-to-t from-black via-zinc/60 to-zinc/50 bg-opacity-50"></div>
          <div className="absolute top-96 h-96 w-full bg-gradient-to-b from-black via-zinc/60 to-zinc/50 bg-opacity-50"></div>

          <div className="ml-96 mt-20">
            <div className="flex mb-5 space-x-2">
              <Search setSearchQuery={setSearchQuery}/>
              <Filter
                isToggle={isFilterActive}
                onClick={() => setIsFilterActive((prevState) => !prevState)}
              />

              {/* Animated Buttons */}
              <AnimatePresence>
                {isFilterActive && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, x: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.5, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="inline-block"
                    >
                      <Button name={"Oldest"} setMode={setMode} mode={mode} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, x: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.5, x: -50 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.1, // Slight delay for staggered animation
                      }}
                      className="inline-block"
                    >
                      <Button name={"Newest"} setMode={setMode} mode={mode} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, x: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.5, x: -50 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.1, // Slight delay for staggered animation
                      }}
                      className="inline-block"
                    >
                      <Button
                        name={"Ascending"}
                        setMode={setMode}
                        mode={mode}
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.5, x: -50 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.1, // Slight delay for staggered animation
                        }}
                        className="inline-block"
                      >
                        <Button
                          name={"Descending"}
                          setMode={setMode}
                          mode={mode}
                        />
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            <div className="flex item-center justify-center mr-20">
            <div className="grid grid-cols-3 gap-4 gap-x-20 mr-20">
              {sorted_data.map((item) => (
                <NftMarketCard nftData={item}/>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Seller Profile */}
        <div className="absolute top-64 left-20 backdrop-blur-sm bg-white/20 text-white w-64 rounded-3xl p-5 shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-40 h-40 rounded-full mb-10"
              src= {sample_user_profile.Profile_img}
              alt=""
            />
            <h1 className="text-xl font-bold">{sample_user_profile.username}</h1>
            <h2 className="text-sm mb-5">{sample_user_profile.Metamask_account}</h2>

            <p className="text-center text-sm mt-2 mb-5">
            {sample_user_profile.Profile_description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
