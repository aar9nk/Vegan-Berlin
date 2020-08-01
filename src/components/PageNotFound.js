import React from "react";
import Layout from "./Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="container-fluid bg-warning">
        <div className="row" style={{ height: "80vh" }}>
          <div className="col align-self-center">
            <div className="display-4 text-center">
              Sorry, try a different link.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
