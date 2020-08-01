import React, { useState } from "react";
import { Fade } from "react-reveal";
import Layout from "../Layout";
import PageHeader from "../ui/PageHeader";

import Veganz1 from "../../images/stores/veganz1.jpg";
import Veganz2 from "../../images/stores/veganz2.jpg";
import Biosphare from "../../images/stores/Biosphare.jpg";
import DrPogo from "../../images/stores/DrPogo.jpeg";

const stores = [
  {
    img: Veganz1,
    title: "Veganz - Kreuzberg",
    address: "Marheinekeplatz 15, Berlin, Germany, 10961",
  },
  {
    img: Veganz2,
    title: "Veganz - Friedrichshain",
    address: "Warschauer Strasse 33, Berlin, Germany, 10243",
  },
  {
    img: Biosphare,
    title: "Biosphäre",
    address: "Weserstraße 212, 12047 Berlin",
  },
  {
    img: DrPogo,
    title: "Dr. Pogo",
    address: "Karl-Marx-Platz 24, Berlin, Germany, 12043",
  },
];

const renderStores = (h, setH) => {
  return stores.map(({ img, title, address }, i) => {
    const hovered = h === i;
    return (
      <div className="col-lg-6" key={i} style={{ overflow: "hidden" }}>
        <Fade
          left={i % 2 !== 0 ? true : false}
          right={i % 2 === 0 ? true : false}
          delay={i * 100}
        >
          <div
            className="stores-container"
            onMouseEnter={() => setH(i)}
            onMouseLeave={() => setH(null)}
          >
            <div
              className="stores-bg"
              style={{
                background: `url(${img})`,
                backgroundSize: "cover",
                backgroundPostion: "center center",
                transform: `scale(${hovered ? "1.1" : "1"})`,
              }}
            />
            <div
              className="stores-overlay"
              style={{
                opacity: hovered ? 0 : 0.3,
              }}
            />
            <h4 className="stores-title text-white text-center">{title}</h4>
            <p className="stores-address text-white text-center d-inline mx-5 p-1">
              {address}
            </p>
          </div>
        </Fade>
      </div>
    );
  });
};

const Stores = () => {
  const [h, setH] = useState(null);
  return (
    <Layout>
      <PageHeader title="Stores">
        <p>
          There is a few completely vegan stores in Berlin. There is also an
          abundance of organic (Bio) supermarkets.
        </p>
      </PageHeader>
      <div className="container">
        <div className="row no-gutters">{renderStores(h, setH)}</div>
      </div>
    </Layout>
  );
};

export default Stores;
