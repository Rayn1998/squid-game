import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openPopupAction,setIdPopupAction } from "../../../store/popupImageReducer";
import PlayButton from "../PlayButton/PlayButton";

const Slide = ({ slide, i, isActive, click }) => {
  const popup = useSelector(state => state.popup.popup);
  const dispatchPopup = useDispatch();

  const clickHandler = (i) => {
    dispatchPopup(setIdPopupAction(i))
    dispatchPopup(openPopupAction());
  }

  return (
    <button
      i={i}
      className="slide"
      onClick={click}
      style={{
        width: isActive ? 250 : 200,
        height: isActive ? 150 : 120,
      }}
    >
      <div
        style={{
          visibility: isActive ? "visible" : "hidden",
          opacity: isActive ? 1 : 0,
          transition: "all 0.1s ease-in-out"
        }}
        onClick={() => clickHandler(i)}
      >
        <PlayButton isActive={isActive}  />
      </div>  
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
