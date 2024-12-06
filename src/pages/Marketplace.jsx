import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import GridComponent from "../components/GridComponent";
import Search from "../components/search";
import styled from "styled-components";


const Button = ({ name, setMode, mode }) => {
  const isActive = mode === name;

  return (
    <button
      onClick={() => {
        setMode(name);
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

const sample_nfts_collect = [
  {
    name: "Galaxy Explorer",
    owner: "StarGazer42",
    img: "",
    status: "Collect",
    price: 500,
    created_at: "Feb 14, 2023",
    sold: false,
    tag: "Art",
  },
  {
    name: "Cyberpunk Kitten",
    owner: "TechCat99",
    img: "",
    status: "Collect",
    price: 350,
    created_at: "Mar 3, 2024",
    sold: false,
    tag: "Art",
  },
  {
    name: "Pixel Samurai",
    owner: "NeoWarrior",
    img: "",
    status: "Collect",
    price: 400,
    created_at: "Dec 20, 2023",
    sold: true,
    tag: "Photography",
  },
  {
    name: "Ethereal Forest",
    owner: "NatureLover",
    img: "",
    status: "Collect",
    price: 600,
    created_at: "Apr 10, 2022",
    sold: true,
    tag: "Photography",
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
    tag: "Music",
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
    tag: "Art",
  },
  {
    name: "Mystic Wolf",
    owner: "LunarHowl",
    img: "",
    status: "Collect",
    price: 300,
    created_at: "Jan 5, 2024",
    sold: true,
    tag: "Photography",
  },
  {
    name: "Crypto Panda",
    owner: "BearMarket",
    img: "",
    status: "Collect",
    price: 350,
    created_at: "Nov 18, 2022",
    sold: false,
    tag: "PFPs",
  },
];

const Marketplace = () => {
  const [mode, setMode] = useState("All");
  const [nftData, setNftData] = useState(sample_nfts_collect);
  const [searchQuery, setSearchQuery] = useState("");

  const getUser = async () => {
    const response = await axios.get("http://127.0.0.1:8000/user/me");
  };

  // Fetch NFT data
  // pass the data into the GridComponent and sellercard
  useEffect(() => {
    const fetchNFTData = async () => {
      try {
        const response = await fetch(""); // api endpoint here
        {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setNftData(data);
        }
      } catch (e) {
        console.error("Error fetching data", e);
      }
    };
    fetchNFTData();
  }, []);

  const filteredNftData = nftData.filter((nft) => {
    const matchesSearch = 
      nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.owner.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter based on mode/tag
    const matchesMode = 
      mode === "All" || 
      (nft.tag && nft.tag.toLowerCase() === mode.toLowerCase());

    return matchesSearch && matchesMode;
  });

  return (
    <Layout>
      <div className="relative w-full min-h-screen bg-zinc-900 overflow-auto">
        <div className="mt-20">
          <div className="flex ml-5 mb-5 space-x-2">
            <Search setSearchQuery={setSearchQuery}/>
            <Button name={"All"} setMode={setMode} mode={mode}></Button>
            <Button name={"Art"} setMode={setMode} mode={mode}></Button>
            <Button name={"Music"} setMode={setMode} mode={mode}></Button>
            <Button name={"Photography"} setMode={setMode} mode={mode}></Button>
            <Button name={"PFPs"} setMode={setMode} mode={mode}></Button>
          </div>
          <GridComponent nftData={filteredNftData} />
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
