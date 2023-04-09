import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Controls from "./Controls/Controls";
import Slides from "./Slides/Slides";

const Carousel = () => {
  const series = useSelector((state) => state.series.series);
  const popupState = useSelector((state) => state.popup.popup);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const carouselRef = useRef();

  const prevHandler = () => {
    !isPrevDisabled && setCurrentIdx((prev) => prev - 1);
  };

  const nextHandler = () => {
    !isNextDisabled && setCurrentIdx((prev) => prev + 1);
  };

  const [mouseOn, setMouseOn] = useState(false);

  useEffect(() => {
    currentIdx === 0 ? setIsPrevDisabled(true) : setIsPrevDisabled(false);
    currentIdx === series.length - 1
      ? setIsNextDisabled(true)
      : setIsNextDisabled(false);
  }, [currentIdx]);


  useEffect(() => {
    if (mouseOn) {
      document.body.style.position = 'fixed';
      document.body.style.overflowY = 'scroll';
    } else if(!mouseOn && !popupState) {
      document.body.style.position = 'static';
      document.body.style.overflowY = 'auto';
    }
  }, [mouseOn]);

  return (
    <div
      ref={carouselRef}
      className="carousel"
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      onWheel={(e) => {
        if (mouseOn && !isNextDisabled && e.deltaY > 0) {
          setCurrentIdx((prev) => prev + 1)
        } else if (mouseOn && !isPrevDisabled && e.deltaY < 0) {
          setCurrentIdx((prev) => prev - 1)
        }
    }}
    >
      <div>1 series</div>
      <Controls
        props={{
          prevHandler,
          nextHandler,
          isPrevDisabled,
          isNextDisabled,
        }}
      />
      <Slides props={{ series, currentIdx, setCurrentIdx }} />
    </div>
  );
};

export default Carousel;
