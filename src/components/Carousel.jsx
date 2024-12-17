import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SellerCard from "./Sellercard";
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  const navigate = useNavigate();
  const carouselItems = [
    {
      id: 1,
      title: "Item 1",
    },
    {
      id: 2,
      title: "Item 2",
    },
    {
      id: 3,
      title: "Item 3",
    },
    {
      id: 4,
      title: "Item 4",
    },
    {
      id: 5,
      title: "Item 5",
    },
  ];

  const responsive = {
    // Define responsive settings for different screen sizes
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2400, min: 1800 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1200 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const customAnimation = {
    // Define your custom animation styles here
    transform: "translateX(-50%)",
    transition: "transform .5s ease-in-out",
  };

  return (
    <Carousel
      className="z-0"
      responsive={responsive}
      renderDotsOutside={true}
      itemClass="carousel-item-spacing"
      partialVisible={false}
      partialVisbile={false}
    >
      {carouselItems.map((item) => (
        <SellerCard
          key={item.id}
          onClick={() => {
            navigate(`/assets/${item.id}`, {
              replace: false,
            });
          }}
        ></SellerCard>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
