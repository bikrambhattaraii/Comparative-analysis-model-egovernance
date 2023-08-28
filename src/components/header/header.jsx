import React from "react";
import "./header.css";
import Image from "../../assests/images/gov.png";
const Header = () => {
  return (
    <div className="navbar">
      <nav className="nav-items">
        <div>
          <img src={Image} alt="" />
          <h4>Government of Nepal</h4>
          <h2>Kathmandu</h2>
        </div>
        <div className="header-text">
          <h1>Comparative Analysis Model</h1>
        </div>
      </nav>
    </div>
  );
};
export default Header;
