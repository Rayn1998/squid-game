import React from "react";
import netflixLogo from "../../../assets/images/netflix-logo.png";

const TopMenu = () => {
  const list = ["RULES OF THE GAME", "", "LIVE", "PLAY", "DIE"];

  return (
    <ul className="topMenu">
      {list.map((li, i) => {
        if (i === 1) {
          return (
            <li className="topMenu__item" key={i}>
              <img
                className="topMenu__item-img"
                src={netflixLogo}
                alt="Netflix logo"
              />
            </li>
          );
        } 
        return (
          <li className="topMenu__item" key={i}>
            {li}
          </li>
        );
      })}
    </ul>
  );
};

export default TopMenu;
