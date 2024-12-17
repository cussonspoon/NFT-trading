import { useNavigate } from "react-router-dom";
import NftMarketCard from "./NftMarketCard";

const GridComponent = ({ nftData = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <div className="grid md:grid-cols-4 gap-5">
        {nftData.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg shadow hover:scale-110 transform transition duration-200"
          >
            <NftMarketCard
              nftData={item || {}}
              onClick={() => {
                navigate(`/assets/${item.id}`, {
                  replace: false,
                });
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;