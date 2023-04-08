import React from "react";
import logo from "../../assets/images/Logo.png";
import TopMenu from "./TopMenu/TopMenu";
import TopSideMenu from "./TopSideMenu/TopSideMenu";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="header logo" />
      <TopMenu />
      <TopSideMenu />
    </div>
  );
};

export default Header;
