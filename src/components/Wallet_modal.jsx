import React from "react";

const WalletModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-zinc-800 text-white p-6 rounded-lg w-96 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">Connect to Tradex</h2>
        <div className="place-content-center justify-center flex">
        <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-metamask-3d-icon-download-in-png-blend-fbx-gltf-file-formats--blockchain-cryptocurrency-crypto-wallet-software-pack-logos-icons-5326393.png" className="size-2/4"></img>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-zinc-400 hover:text-white"
          onClick={onClose}
        >
          X
        </button>

        {/* Wallet Actions */}
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-500 transition duration-300">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default WalletModal;
