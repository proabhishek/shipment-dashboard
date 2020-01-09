import React from "react";
import logo from "./assets/logo.svg";

const Navbar = () => {
  return (
    <React.Fragment>
      <ul className="navbar">
        <li id="logo">
          <img src={logo} alt="logo" />
          <h5>intuiguine</h5>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Brands</a>
        </li>
        <li>
          <a href="#">Transporters</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
