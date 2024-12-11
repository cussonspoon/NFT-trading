
const NFTImage = ({ imageSrc, width, height }) => {
    return (
        <div className={`${width} ${height} rounded-lg shadow-md`}>
            <div className="rounded-lg shadow-md">
                <img
                    className="w-full rounded-lg"
                    src={imageSrc}
                    alt="NFT Artwork"
                />
            </div>
        </div>
    );
};

export default NFTImage;
