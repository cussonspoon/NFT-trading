import React, { useState } from "react";
import NftMarketCard from "../components/NftMarketCard";
import Layout from "../components/Layout";
import LoadingButton from "../components/LoadingButton";

const Upload = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [size, setSize] = useState("");
  const [properties, setProperties] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-zinc-900 text-white">
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="mb-10 flex">
            <h1 className="text-4xl font-bold text-left">Upload Your NFTs</h1>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-3 gap-10">
            {/* Upload Section */}
            <div className="col-span-2">
              {/* Input Details Section with Border */}
              <div className="p-6 border border-zinc-700 rounded-lg">
                <div className="mb-8">
                  <p className="text-xl font-bold text-left">Upload File</p>
                  <p className="text-zinc-400 text-left ">Drag or choose your file to upload</p>
                  <label
                    htmlFor="file-upload"
                    className="block border-dashed border-2 border-zinc-700 rounded-lg h-36 flex items-center justify-center cursor-pointer hover:border-white"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="object-contain max-h-full"
                      />
                    ) : (
                      <p className="text-zinc-400 text-left">
                        PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                      </p>
                    )}
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>

                {/* Item Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-left">
                    Item Details
                  </h2>
                  <div className="mb-4">
                    <label className="block text-sm mb-1 text-left font-sans text-zinc-400 font-bold">
                      ITEM NAME
                    </label>
                    <input
                      type="text"
                      className="w-full bg-zinc-800 text-white rounded-md px-4 py-2"
                      placeholder="e.g., Black Golden T(N)iger"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1 text-left font-sans text-zinc-400 font-bold">
                      DESCRIPTION
                    </label>
                    <textarea
                      className="w-full bg-zinc-800 text-white rounded-md px-4 py-2"
                      rows={3}
                      placeholder="e.g., 'Valuable NFTs that will go to the moon in no time (not scam trust me)...'"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Royalties */}
                    <div>
                      <label className="block text-sm mb-1 text-left font-sans text-zinc-400 font-bold">
                        PRICE
                      </label>
                      <input
                        type="text"
                        className="w-full bg-zinc-800 text-white rounded-md px-4 py-2"
                        placeholder="e.g., 10"
                        value={royalties}
                        onChange={(e) => setRoyalties(e.target.value)}
                      />
                    </div>

                    {/* Size */}
                    <div>
                      <label className="block text-sm mb-1 text-left font-sans text-zinc-400 font-bold">STOCK</label>
                      <input
                        type="text"
                        className="w-full bg-zinc-800 text-white rounded-md px-4 py-2"
                        placeholder="e.g., 10"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      />
                    </div>

                    {/* Properties */}
                    <div>
                      <label className="block text-sm mb-1 text-left font-sans text-zinc-400 font-bold">
                        TAGS
                      </label>
                      <input
                        type="text"
                        className="w-full bg-zinc-800 text-white rounded-md px-4 py-2"
                        placeholder="e.g., Fantasy"
                        value={properties}
                        onChange={(e) => setProperties(e.target.value)}
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Section with Border */}
            <div className="p-6 border border-zinc-700 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-left">Preview</h2>
              <NftMarketCard
                nftData={{
                  name: itemName || "Unnamed NFT",
                  price: royalties || "0",
                  owner: "You",
                  img: imagePreview || "/nft/nft1.jpg",
                }}
              />
              <button
                className="text-red-500 text-sm hover:underline mt-4 text-left"
                onClick={() => {
                  setItemName("");
                  setDescription("");
                  setRoyalties("");
                  setSize("");
                  setProperties("");
                  setImagePreview(null);
                }}
              >
                Clear all
              </button>
            </div>
            <div className="mr-80 ">
            <LoadingButton/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upload;
