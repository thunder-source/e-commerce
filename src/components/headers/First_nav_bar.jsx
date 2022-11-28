import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/features/cartSlice";

const First_nav_bar = () => {
  const dispatch = useDispatch();
  return (
    <div className="First_nav_bar" id="home">
      <div className="First_nav_bar_logo">
        <img src="images/amazon-dark.svg" alt="logo" />
      </div>
      <div className="First_nav_bar_select">
        <select name="Prime Video">
          <option value="Prime Video">All</option>
          <option value="saab">Saab </option>
          <option value="opel">Opel </option>
          <option value="audi">Audi </option>
          <option value="audi">Audi </option>
        </select>
        <input className="First_nav_bar_search" type="search" name="" id="" />
        <div className="First_nav_bar_search_icon">
          <SearchIcon />
        </div>
      </div>
      <div className="First_nav_bar_flag">
        <img src="/images/in.svg" alt="flag" height="20px" />
        &#9662;
      </div>
      <div className="First_nav_bar_Sign_in">
        Hello, Sign in <br />
        <b>Account & Lists &#9662;</b>
      </div>

      <div className="First_nav_bar_return">
        Returns <br />& Orders
      </div>

      <div
        onClick={() => dispatch(toggleCart())}
        className="First_nav_bar_cart"
      >
        <AddShoppingCartIcon />
        <span>Cart</span>
      </div>
    </div>
  );
};

export default First_nav_bar;
