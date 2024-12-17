import Salecard from "../components/Salecard";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Search from "../components/search";
import Filter from "../components/filter";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, NftMarketCard } from "./UserProfile";

const sample_nfts_collect_artist = [
    {
      name: "Galaxy Explorer",
      owner: "StarGazer42",
      img: "",
      status: "Collect",
      price: 500,
      created_at: "Feb 14, 2023",
      sold: false,
      id: "asdawd",
    },
    {
      name: "Cyberpunk Kitten",
      owner: "StarGazer42",
      img: "",
      status: "Collect",
      price: 350,
      created_at: "Mar 3, 2024",
      sold: false,
      id: "b393930s",
    },
    {
        name: "Galaxy Explorer",
        owner: "StarGazer42",
        img: "",
        status: "Collect",
        price: 500,
        created_at: "Feb 14, 2023",
        sold: false,
        id: "c939jjc",
      },
      {
        name: "Cyberpunk Kitten",
        owner: "StarGazer42",
        img: "",
        status: "Collect",
        price: 350,
        created_at: "Mar 3, 2024",
        sold: false,
        id: "d3k3k3",
      },
      {
        name: "Galaxy Explorer",
        owner: "StarGazer42",
        img: "",
        status: "Collect",
        price: 500,
        created_at: "Feb 14, 2023",
        sold: false,
        id: "fffaw33",
      },
      {
        name: "Cyberpunk Kitten",
        owner: "StarGazer42",
        img: "",
        status: "Collect",
        price: 350,
        created_at: "Mar 3, 2024",
        sold: false,
        id: "00ajs8c9",
      },
      {
        name: "Galaxy Explorer",
        owner: "StarGazer42",
        img: "",
        status: "Collect",
        price: 500,
        created_at: "Feb 14, 2023",
        sold: false,
        id: "a9s9s9s",
      },
      {
        name: "Cyberpunk Kitten",
        owner: "StarGazer42",
        img: "",
        status: "Collect",
        price: 350,
        created_at: "Mar 3, 2024",
        sold: false,
        id: "c9s9s9s",
      },
      {
        name: "Galaxy Explorer",
        owner: "StarGazer42",
        img: "",
        status: "Collect",
        price: 500,
        created_at: "Feb 14, 2023",
        sold: false,
        id: "skjjdvijsj"
      },
      {
        name: "Cyberpunk Kitten",
        owner: "StarGazer42",
        img: "",
        status: "Collect",
        price: 350,
        created_at: "Mar 3, 2024",
        sold: false,
        id: "akslcjacjp"
      },
    // ...other NFTs
  ];

const sample_artist_profile = 
  {
    ID : "u50942765789234927",
    username : "StarGazer42",
    Metamask_account : "StarGazer42_wallet",
    Profile_description : "I am a bot I dont know shit uwooghh cunny Arlecchino please leash me Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam laborum, atque, ratione in totam ab voluptas doloremque quo nulla libero ipsa debitis eaque dolor illum asperiores quis repellat, dolores eos?",
    Profile_img : "https://image.invaluable.com/housePhotos/auctionsappraisers/21/639021/H0150-L165170442.jpg",
    Inventory : sample_nfts_collect_artist,
    Onsale : sample_nfts_collect_artist,
    Total_Volume : 12437465,
    Tags_id : "..."
  }

const Tag = ({name}) => {
    return (
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-1 mt-2  text-center me-2 mb-2">{name}</button>

    ); 
}

const ArtistProfile = () => {
    const [mode, setMode] = useState("Collection");
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const getUser = async () => {
      const response = await axios.get("http://127.0.0.1:8000/user/me");
    };
  
    const sorted_data = [...sample_artist_profile.Inventory].sort((a, b) => {
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
              src= {sample_artist_profile.Profile_img}
              alt=""
            />
            <h1 className="text-xl font-bold">{sample_artist_profile.username}</h1>
            <h2 className="text-sm mb-5">{sample_artist_profile.Metamask_account}</h2>

            <p className="text-center text-sm mt-2 mb-5">
            {sample_artist_profile.Profile_description}
            </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
  

export default ArtistProfile;