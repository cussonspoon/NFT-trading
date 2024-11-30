import CarouselComponent from './Carousel';
import NFTcard from './NFTcard';
import SellerCard from './Sellercard';

const Artwork = () => {
    return (
        <div className="w-full flex flex-col items-start text-white px-10 mb-10">
            <h1 className='text-4xl'>Artworks</h1>
            <div className="w-full my-5">
                <h1 className='text-2xl flex items-start mb-3'>Notable Collections</h1>
                <CarouselComponent></CarouselComponent>
            </div>
    
            <div className="w-full my-5">
                <h1 className='text-2xl flex items-start mb-3'>Trending in Arts</h1>
                <CarouselComponent></CarouselComponent>
            </div>

            <div className="w-full my-5">
                <h1 className='text-2xl flex items-start mb-3'>Trending in Gaming</h1>
                <CarouselComponent></CarouselComponent>
            </div>
        </div>
    );
}

export default Artwork;