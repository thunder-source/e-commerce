import React from "react";

const Third_nav_bar = () => {
  return (
    <div className="Third_nav_bar ">
      <div className="Third_nav_bar_left ">
        <ul>
          <li className="Third_nav_bar_left_first_child">
            <a href="#">Amazon</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Channels</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">My stuff</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
        </ul>
      </div>

      <div className="Third_nav_bar_Right">
        <ul>
          <li>
            <a href="#"> Settings </a>
          </li>
          <li>
            <a href="#"> Getting Started </a>
          </li>
          <li>
            <a href="#"> Help </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Third_nav_bar;
