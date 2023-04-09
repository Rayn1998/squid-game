import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopupAction } from "../../store/popupImageReducer";
import { RiCloseCircleFill } from "react-icons/ri"

const Popup = ({ isOpen }) => {
  const img = useSelector((state) => state.series.series);
  const popupState = useSelector((state) => state.popup.popup);
  const popupImgId = useSelector((state) => state.popup.i);
  const dispatch = useDispatch();

  const closeEsc = (e) => {
    if (e.code === "Escape") {
      dispatch(closePopupAction());
    }
  }

  const handleClose = () => {
    dispatch(closePopupAction());
  }

  useEffect(() => {
    if (popupState) {
      window.addEventListener("keydown", closeEsc);
      document.body.style.position = 'fixed';
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.position = 'static';
      document.body.style.overflowY = 'auto';
      return () => window.removeEventListener("keydown", closeEsc);
    }
  }, [popupState]);

  return (
    <div
      className="popup"
      style={{
        visibility: popupState ? "visible" : "hidden",
        opacity: popupState ? "1" : "0",
        transition: "all 0.3s ease-in-out"
      }}
    >
      <div className="wrapper">
        <img className="popup__img" src={img[popupImgId]} alt={img[popupImgId]} />
        <div className="popup__close" onClick={handleClose} >
         <RiCloseCircleFill className="popup__close-btn" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
