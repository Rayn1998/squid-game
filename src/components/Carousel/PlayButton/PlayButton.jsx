import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const PlayButton = ({isActive, click}) => {
  return (
    <div className="playbutton">
      <BsFillPlayCircleFill onClick={click} className="playbutton__img" style={{
        visibility: isActive ? "visible" : "hidden",
      }} />
    </div>
  );
};

export default PlayButton;
