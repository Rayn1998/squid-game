import React from "react";
import PlayButton from "../PlayButton/PlayButton";

const Slide = ({ slide, i, clickHandler, isActive, click }) => {
  return (
    <button
      i={i}
      className="slide"
      onClick={clickHandler}
      style={{
        width: isActive ? 250 : 200,
        height: isActive ? 150 : 120,
      }}
    >
      <PlayButton isActive={isActive} click={click} />
      <div
        className="slide__bg"
        style={{
          backgroundImage: `url(${slide})`,
          filter: isActive ? "grayscale(100)" : "",
          boxShadow: isActive ? "inset 0 0 100px 20px black" : "",
        }}
      ></div>
    </button>
  );
};

export default Slide;
