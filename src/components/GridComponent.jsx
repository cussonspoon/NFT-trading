import React from "react";
import { useNavigate } from "react-router-dom";
import SellerCard from "./Sellercard";

const GridComponent = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-40 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-lg shadow hover:scale-105 transform transition duration-200  "
        >
          <SellerCard
            onClick={() => {
              navigate("/artist", {
                replace: true,
              });
            }}
          >
            {item.title}
          </SellerCard>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
