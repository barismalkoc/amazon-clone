import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import dropDownList from "../src/headerOptionDropdownList.json";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  let dropdown = dropDownList.dropdownList;
  console.log(dropdown);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>

      <div className="header_location">
        <LocationOnIcon className="header_locationIcon"></LocationOnIcon>
        <div className="header_locationLine">
          <span className="header_locationLineOne">Deliver to</span>
          <span className="header_locationLineTwo">Turkey</span>
        </div>
      </div>

      <div className="header_search">
        <select name="dropdown" className="header_searchDropDown">
          {dropdown.map((item) => {
            console.log(item.name);
            return <option value={item.name}>{item.name}</option>;
          })}
        </select>
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to="login" style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
