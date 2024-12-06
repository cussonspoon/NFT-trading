import CarouselComponent from "./Carousel";
import NFTcard from "./NFTcard";
import SellerCard from "./Sellercard";

const Artwork = () => {
  return (
    <div className="w-full flex flex-col items-start text-white px-10 mb-10">
      <h1 className="text-4xl">Artworks</h1>
      <div className="w-full my-5">
        <div className="text-2xl flex items-start justify-between mb-3">
          <h1>Notable Collections</h1>
          <button
            className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 text-white mr-20 hover:scale-95 transition duration-300 ease-in-out`}
          >
            <span
              className={`relative px-5 py-2.5 text-lg transition-all ease-in duration-75 rounded-full bg-transparent`}
            >
              View Category
            </span>
          </button>
        </div>
        <CarouselComponent></CarouselComponent>
      </div>

      <div className="w-full my-5">
        <div className="text-2xl flex items-start justify-between mb-3">
          <h1>Trending in Arts</h1>
          <button
            className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 text-white mr-20 hover:scale-95 transition duration-300 ease-in-out`}
            >
            <span
              className={`relative px-5 py-2.5 text-lg transition-all ease-in duration-75 rounded-full bg-transparent`}
            >
              View Category
            </span>
          </button>
        </div>
        <CarouselComponent></CarouselComponent>
      </div>

      <div className="w-full my-5">
        <div className="text-2xl flex items-start justify-between mb-3">
          <h1>Trending in Gaming</h1>
          <button
            className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 text-white mr-20 hover:scale-95 transition duration-300 ease-in-out`}
            >
            <span
              className={`relative px-5 py-2.5 text-lg transition-all ease-in duration-75 rounded-full bg-transparent`}
            >
              View Category
            </span>
          </button>
        </div>
        <CarouselComponent></CarouselComponent>
      </div>
    </div>
  );
};

export default Artwork;
