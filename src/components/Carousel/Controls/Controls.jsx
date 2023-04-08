import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Controls = ({ props }) => {
  const { prevHandler, nextHandler, isPrevDisabled, isNextDisabled } = props;
  const arrowSize = 26;

  return (
    <div className="controls">
      <button
        className={`controls__forward ${isPrevDisabled ? "btn-inactive" : ""}`}
        onClick={prevHandler}
      >
        <MdKeyboardArrowLeft size={arrowSize} />
      </button>
      <button
        className={`controls__forward ${isNextDisabled ? "btn-inactive" : ""}`}
        onClick={nextHandler}
      >
        <MdKeyboardArrowRight size={arrowSize} />
      </button>
    </div>
  );
};

export default Controls;
