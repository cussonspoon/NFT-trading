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

const UserSalecard = ({ width, height, img }) => {
  return (
    <div className="w-60 h-96 rounded-2xl relative overflow-hidden group mb-3">
      {/* Background Image */}
      <img
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
        src={img || "/nft/nft1.jpg"}
        alt="NFT"
      />

      {/* Card Details */}
      <div className="absolute bottom-0 w-full h-28 bg-black bg-opacity-50 text-white p-4 z-10">
        <div className="absolute bottom-8 flex flex-col">
          <h1 className="text-xl font-bold">Citizen #941</h1>
          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-col">
              <h2 className="text-md font-semibold pb-3">2 ETH ($5,590)</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Now Button (Hidden by Default) */}
      <div className="absolute bottom-[-3rem] w-full bg-blue-500 text-white text-center p-2 z-20 transition-all duration-500 ease-in-out group-hover:bottom-0">
        Sell now
      </div>
    </div>
  );
};

const Marketplace = () => {
  const [mode, setMode] = useState("Collection");
  const getUser = async () => {
    const response = await axios.get("http://127.0.0.1:8000/user/me");
  };
  useEffect(() => {}, []);
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
