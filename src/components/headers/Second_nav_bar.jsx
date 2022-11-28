import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Second_nav_bar = () => {
  return (
    <div className="Second_nav_bar">
      <div className="nav_left">
        <ul>
          <li>
            <a href="#">
              {" "}
              <span>
                <DehazeIcon sx={{ fontSize: 16 }} />
              </span>{" "}
              All
            </a>
          </li>
        </ul>
      </div>
      <div className="nav_right">
        <ul>
          <li>
            <a href="#"> Today's deal </a>
          </li>
          <li>
            <a href="#"> Customer service </a>
          </li>
          <li>
            <a href="#"> Registry </a>
          </li>
          <li>
            <a href="#"> Gift Cards </a>
          </li>
          <li>
            <a href="#"> sell </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Second_nav_bar;
