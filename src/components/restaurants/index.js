import React from "react";
import { Fade } from "react-reveal";
import Layout from "../Layout";
import PageHeader from "../ui/PageHeader";
import RestaurantCard from "../ui/RestaurantCard";
import Lastellanera from "../../images/restaurants/Lastellanera.jpeg";
import WhiteCrow from "../../images/restaurants/WhiteCrow.jpeg";
import PeleMele from "../../images/restaurants/pelemele.jpeg";
import Brammibal from "../../images/restaurants/Brammibal.jpeg";
import KiezVegan from "../../images/restaurants/KiezVegan.jpeg";

const restaurants = [
  {
    img: Brammibal,
    title: "Brammibal's Donuts",
    description:
      "Vegan donut bakery and cafe opened here since 2016. Features a wide variety of delicious donuts daily and serves direct trade coffee as well as sandwiches with fillings.",
  },
  {
    img: Lastellanera,
    title: "La Stella Nera",
    description:
      "Est. May 2016 a collectively-run restaurant making thin-crust Neapolitan pizza in a wood-fire oven. Also serves pasta and fresh salads, dessert.",
  },
  {
    img: KiezVegan,
    title: "Kiez Vegan",
    description:
      "Deli cafe offering Turkish Anatolian vegan food with a selection of salads, wraps, pastries and breads.",
  },
  {
    img: PeleMele,
    title: "Pele-Mele",
    description:
      "Vegan food cafe. Offers specialty breakfasts every day plus brunch on Sunday with a selection of salad, soup, bread, cake, coffee, and tea.",
  },
  {
    img: WhiteCrow,
    title: "White Crow",
    description:
      "Cafe-deli on the border between Kreuzberg and Alt-Treptow. Offers coffee with different plant milk options. It's also the home of Berlin Kombucha Society, so alongside cakes, salads, and soups it also sells fermented food to takeaway such as sauerkraut and kimchi.",
  },
];

const renderRestaurants = () => {
  return restaurants.map(({ img, title, description }, i) => {
    return (
      <Fade key={i}>
        <RestaurantCard img={img} title={title} description={description} />
      </Fade>
    );
  });
};

const Restaurants = () => {
  return (
    <Layout>
      <PageHeader title="Restaurants">
        <p>
          Check out some of my favourite spots! There is something in every
          neighbourhood so here is a list with just a few, get out there and
          start searching!
        </p>
      </PageHeader>
      <div className="container mt-3">{renderRestaurants()}</div>
    </Layout>
  );
};

export default Restaurants;
