import Salecard from "../components/Salecard";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Search from "../components/search";
import Filter from "../components/filter";
import { motion, AnimatePresence } from "framer-motion";

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




const Button = ({ name, setMode, mode }) => {
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

const UserSalecard = ({
  name,
  owner,
  img,
  status,
  price,
  created_at,
  sold,
}) => {
  return (
    <div className="w-60 h-96 rounded-2xl relative overflow-hidden group mb-3">
      {/* Background Image */}
      <img
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
        src={img || "/nft/nft1.jpg"}
        alt={`${name} NFT`}
      />

      {/* Card Details */}
      <div className="absolute bottom-0 w-full h-28 bg-black bg-opacity-50 text-white p-4 z-10">
        <div className="flex flex-col space-y-2 text-left">
          {/* NFT Name */}
          <h1 className="text-lg font-bold truncate">{name}</h1>

          {/* Owner */}
          <p className="text-sm italic text-gray-300 truncate">
            Owned by {owner}
          </p>

          {/* Price */}
          <span className="text-md font-semibold mt-1">{price} ETH</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="absolute bottom-[-3rem] w-full bg-blue-500 text-white text-center p-2 z-20 transition-all duration-500 ease-in-out group-hover:bottom-0">
        {sold ? "Resell Now" : "Sell Now"}
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

  const sorted_sample_nfts_collect = [...sample_nfts_collect].sort((a, b) => {
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
            <div className="grid grid-cols-4 gap-4">
              {sorted_sample_nfts_collect.map((nft, index) => (
                <UserSalecard
                  key={index} // Use index or a unique ID for the key
                  name={nft.name}
                  owner={nft.owner}
                  img={nft.img}
                  status={nft.status}
                  price={nft.price}
                  created_at={nft.created_at}
                  sold={nft.sold}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seller Profile */}
        <div className="absolute top-64 left-20 backdrop-blur-sm bg-white/20 text-white w-64 rounded-3xl p-5 shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-40 h-40 rounded-full mb-10"
              src="/nft/nft1.jpg"
              alt=""
            />
            <h1 className="text-xl font-bold">Neo Tokyo Citizens</h1>
            <h2 className="text-sm mb-5">Metamask account</h2>

            <p className="text-center text-sm mt-2 mb-5">
              A trailblazing NFT artist known for blending futuristic design
              with cutting-edge blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
