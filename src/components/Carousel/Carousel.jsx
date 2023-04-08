import React, { useState, useEffect } from "react";
import Controls from "./Controls/Controls";
import Slides from "./Slides/Slides";

const Carousel = ({click}) => {
  const slidesLinks = [
    "https://mobimg.b-cdn.net/v3/fetch/2b/2b64d58d2479434b8b8112911ce5767f.jpeg",
    "https://mobimg.b-cdn.net/v3/fetch/e4/e482cb38179a9a74c500402b33278af4.jpeg",
    "https://wallpapercave.com/wp/wp10102234.jpg",
    "https://wallpapercave.com/wp/wp10722682.jpg",
  ];

  const [slides] = useState(slidesLinks);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const prevHandler = () => {
    !isPrevDisabled && setCurrentIdx((prev) => prev - 1);
  };

  const nextHandler = () => {
    !isNextDisabled && setCurrentIdx((prev) => prev + 1);
  };

  const [mouseOn, setMouseOn] = useState(false);

  useEffect(() => {
    currentIdx === 0 ? setIsPrevDisabled(true) : setIsPrevDisabled(false);
    currentIdx === (slides.length - 1) ? setIsNextDisabled(true) : setIsNextDisabled(false);
  }, [currentIdx]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      onWheel={(e) => {
        if (mouseOn && !isNextDisabled && e.deltaY > 0) {
          setCurrentIdx((prev) => prev + 1);
        } else if (mouseOn && !isPrevDisabled && e.deltaY < 0) {
          setCurrentIdx((prev) => prev - 1);
        }
      }}
    >
      <div>1 series</div>
      <Controls
        props={{
          prevHandler,
          nextHandler,
          isPrevDisabled,
          isNextDisabled
        }}
      />
      <Slides props={{ slides, currentIdx, setCurrentIdx, click }} />
    </div>
  );
};

export default Carousel;
