import React from "react";
import "./HeaderBanner.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

function HeaderBanner() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="header_banner">
      <div className="banner_left" onClick={() => setShowMenu(!showMenu)}>
        <MenuIcon className="banner_leftIcon"></MenuIcon>
        <span className="banner_leftLineOne">All</span>
      </div>
      {showMenu ? <HamburgerMenu></HamburgerMenu> : null}
      <div className="banner_fill">
        <span className="banner_fillLink">Today's Deal</span>
        <span className="banner_fillLink">Customer Service</span>
        <span className="banner_fillLink">Registry</span>
        <span className="banner_fillLink">Gift Cards</span>
        <span className="banner_fillLink">Sell</span>
      </div>
    </div>
  );
}

export default HeaderBanner;
