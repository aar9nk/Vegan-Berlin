import React from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";

const Nav = () => {
  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/restaurants", name: "Restaurants" },
    { to: "/stores", name: "Stores" },
  ];

  const renderNavLinks = () => {
    return navLinks.map(({ to, name }, i) => {
      return <NavLink to={to} name={name} key={i} />;
    });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link
          to="/"
          className={`navbar-brand ${
            window.location.pathname !== "/" ? "text-primary" : null
          }`}
        >
          <span className="baloo-bold" style={{ fontSize: "1.5rem" }}>
            Vegan Berlin
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">{renderNavLinks()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
