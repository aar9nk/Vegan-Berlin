import React from "react";
import { Fade } from "react-reveal";
import { faStoreAlt, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import IconCard from "../ui/IconCard";

const cards = [
  {
    icon: faStoreAlt,
    title: "Stores",
    description:
      "Berlin has a great range of stores with vegan products, including some that are completely vegan!",
    link: {
      to: "/stores",
      label: "Learn more",
    },
  },
  {
    icon: faPizzaSlice,
    title: "Restaurants",
    description:
      "There is so many completely VEGAN restaurants in Berlin, have a look at some of the ones I have chosen.",
    link: {
      to: "/restaurants",
      label: "Learn more",
    },
  },
  {
    icon: faReact,
    title: "React",
    description:
      "I created this website using React. If you want to see more check out my website or send me an email.",
    link: {
      to: "/home",
      label: "Learn more",
    },
  },
];

const Plan = () => {
  return (
    <section id="plan" className="py-5" style={{ background: "#f5f5f5" }}>
      <div className="container">
        <h2 className="text-center test">Have a look around Berlin</h2>
        <div className="row">
          {cards.map((card, i) => {
            return (
              <Fade bottom key={i} delay={i * 100}>
                <div className="col-md-4">
                  <IconCard
                    icon={card.icon}
                    color={card.color}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plan;
