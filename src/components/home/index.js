import React from "react";
import Layout from "../Layout";

import Featured from "./Featured";
import About from "./About";
import Plan from "./Plan";

const Home = () => {
  return (
    <Layout>
      <Featured />
      <div className="container-fluid bg-primary text-center text-white py-3">
        <h3 className="baloo-bold hashtag-fiesta">#VeganBerlin</h3>
      </div>
      <About />
      <Plan />
    </Layout>
  );
};

export default Home;
