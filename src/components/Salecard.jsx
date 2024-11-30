
const Salecard = ({ width, height, img }) => {
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
          Buy now
        </div>
      </div>
    );
  };
  
  export default Salecard;
  