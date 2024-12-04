import Salecard from "../components/Salecard";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import GridComponent from "../components/GridComponent";

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

const Marketplace = () => {
  const [mode, setMode] = useState("Collection");
  const [nftData, setNftData] = useState([]);
  const getUser = async () => {
    const response = await axios.get("http://127.0.0.1:8000/user/me");
  };
  useEffect(() => {}, []);

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

  return (
    <Layout>
      <div className="relative w-full min-h-screen bg-zinc-900 overflow-auto">
        <div className="mt-20">
          <div className="flex ml-5 mb-5 space-x-2">
            <Button name={"All"} setMode={setMode} mode={mode}></Button>
            <Button name={"Art"} setMode={setMode} mode={mode}></Button>
            <Button name={"Music"} setMode={setMode} mode={mode}></Button>
          </div>
          {/* todo: Implement search bar below */}
          {mode === "All" ? (
            <div>
              <GridComponent />
            </div>
          ) : (
            <div>
              <GridComponent />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
