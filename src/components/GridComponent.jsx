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
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
    { id: 7, title: "Item 7" },
    { id: 8, title: "Item 8" },
    { id: 9, title: "Item 9" },
    { id: 10, title: "Item 10" },
    { id: 11, title: "Item 11" },
    { id: 12, title: "Item 12" },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="grid md:grid-cols-4 gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg shadow hover:scale-110 transform transition duration-200"
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
    </div>
  );
};

export default GridComponent;
