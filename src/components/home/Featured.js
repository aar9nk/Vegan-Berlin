import React from "react";
import FullWidthCarousel from "../ui/FullWidthCarousel";

import ThreePlates from "../../images/ThreePlates.jpg";
import FoodPlate from "../../images/FoodPlate.jpg";
import Berlin from "../../images/Berlin1.jpg";
import TwoPlates from "../../images/TwoPlates.jpg";

const Featured = () => {
  const slides = [
    {
      image: Berlin,
      heading: "Berlin.",
      description: "Scroll down to see some of my favourtie spots.",
      buttonLabel: "Check Out Restaurants",
      link: "/home",
    },
    {
      image: TwoPlates,
      heading: "Restaurants.",
      description: "There is so many different options in Berlin.",
      buttonLabel: "Check Out Restaurants",
      link: "/restaurants",
    },
    {
      image: ThreePlates,
      heading: "Stores",
      description:
        "Feel like cooking at home? Have a look at Vegan supermarkets.",
      buttonLabel: "Check Out Stores",
      link: "/stores",
    },
    {
      image: FoodPlate,
      heading: "Veganz.",
      description: "There is even completely vegan supermarkets.",
      buttonLabel: "Check Out Stores",
      link: "/stores",
    },
  ];

  return (
    <section id="showcase">
      <FullWidthCarousel slides={slides} height="85vh" />
    </section>
  );
};

export default Featured;
