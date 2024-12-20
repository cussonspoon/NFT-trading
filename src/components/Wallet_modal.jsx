import React, { useState } from "react";
import { ethers } from "ethers";

const WalletModal = ({ isOpen, onClose }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);
  const [balance, setBalance] = useState(null);

  if (!isOpen) return null;

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        setError(
          "MetaMask is not installed. Please install it to use this feature."
        );
        return;
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const walletAddress = accounts[0];
      setWalletAddress(walletAddress);

      // Fetch wallet balance
      const balanceHex = await window.ethereum.request({
        method: "eth_getBalance",
        params: [walletAddress, "latest"], // Address and block reference
      });

      const balanceInWei = parseInt(balanceHex, 16); // Convert hex to a decimal integer
      const balanceInEther = balanceInWei / 1e18; // Convert Wei to Ether
      setBalance(balanceInEther); // Store the Ether value
    } catch (err) {
      if (err.code === -32602 || err.message.includes("Cannot fetch balance")) {
        //Error code for balance error
        setError("Cannot fetch wallet balance. Please try again later.");
      } else {
        setError("Failed to connect wallet. Please try again.");
      }
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-zinc-800 text-white p-6 rounded-lg w-96 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">Connect to Tradex</h2>
        <div className="place-content-center justify-center flex">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-metamask-3d-icon-download-in-png-blend-fbx-gltf-file-formats--blockchain-cryptocurrency-crypto-wallet-software-pack-logos-icons-5326393.png"
            className="size-2/4"
          ></img>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-zinc-400 hover:text-white"
          onClick={onClose}
        >
          X
        </button>

        {/* Wallet Actions */}
        {walletAddress ? (
          <>
            <p className="text-sm mb-4">Connected Wallet:</p>
            <p className="text-lg font-semibold mb-6 truncate">
              {`${walletAddress.slice(0, 7)}...${walletAddress.slice(-5)}`}
            </p>
            <p>Balance: {balance}</p>
          </>
        ) : (
          <>
            <p className="text-sm mb-6">
              Connect your wallet to access and manage your NFTs.
            </p>
            <button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-500 transition duration-300"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          </>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default WalletModal;
