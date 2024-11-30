

import ArtistCard from "./ArtistCard";

const ArtistList = () => {
    return (
        <div className="w-full flex flex-col items-start mb-10 text-white px-10">
            <h1 className="text-4xl mb-3">Top Sellers         
            </h1>
            <ArtistCard></ArtistCard>
        </div>
    );
}

export default ArtistList;