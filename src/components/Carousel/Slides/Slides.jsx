import React from "react";
import Slide from "../Slide/Slide";

const Slides = ({ props }) => {
  const { series, currentIdx, setCurrentIdx } = props;

  const playHandler = (idx) => {
    setCurrentIdx(idx);
  };

  const offset = currentIdx * 230;

  return (
    <div
      className="slides"
      style={{
        transform: `translateX(-${offset}px)`,
        transition: "all 0.3s ease-in-out",
      }}
    >
      {series.map((slide, i) => {
        let isActive = i === currentIdx;

        return (
          <Slide
            slide={slide}
            key={i}
            i={i}
            click={() => {
              playHandler(i);
            }}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default Slides;
