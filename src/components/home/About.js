import React from "react";
import about1 from "../../images/about1.jpg";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <img
                src={about1}
                alt="red peppers."
                className="img-fluid rounded-circle pb-3"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
          <div className="col-md-9">
            <h3 className="baloo-bold">Berlin – The foodie's guide</h3>
            <p>
              Here you will find some favourite spots for a vegan in berlin!
            </p>
            <p>
              I created this website to use as a preview of what can be done
              with React. I find it intuitive to use React and the avaliable
              addons that have been created. You can find more information on
              <a
                className="aaronbyrom"
                href="https://aaronbyrom.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                {" "}
                my website.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
