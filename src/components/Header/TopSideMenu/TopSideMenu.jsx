import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

const TopSideMenu = () => {
  const [isShown, setIsShown] = useState(false);

  function menuClick() {
    setIsShown(!isShown);
  }

  return (
    <div className='topSideMenu__wrapper'>
      <div className='topSideMenu__socials'>
        <FaInstagram />
        <FaTwitter />
      </div>
      <div className='topSideMenu__menu' onClick={menuClick}>
        <HiOutlineMenuAlt2 style={{width: 46, height: 46, cursor: "pointer"}} />
        {isShown && (
          <ul className='topSideMenu__list'>
            {Array(5).fill('').map((_, idx) => {
              return(
                <li key={`hamb${idx}`}>
                  <Link className='topSideMenu__list-item' to={"/"}>{`Item${idx}`}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopSideMenu;
