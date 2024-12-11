
const NFTDetails = ({ title, owner, description }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400 mb-2">Owned by <span className="text-blue-500">{owner}</span></p>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <p className="text-lg font-semibold text-left">Description:</p>
                <p className="text-lg text-left">{description}</p>
            </div>
        </div>
    );
};

export default NFTDetails;
