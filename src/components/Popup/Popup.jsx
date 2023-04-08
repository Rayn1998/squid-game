import React from 'react';

const Popup = ({isOpen}) => {
  return (
    <div className='popup' style={{
      display: isOpen ? "block" : "none",
      visibility: isOpen ? "visible" : "hidden", 
    }} >
      <form className='popup__form'>

      </form>
    </div>
  );
}

export default Popup;
