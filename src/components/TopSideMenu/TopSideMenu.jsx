import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

const TopSideMenu = () => {
  return (
    <div className='topSideMenu__wrapper'>
      <div className='topSideMenu__socials'>
        <FaInstagram />
        <FaTwitter />
      </div>
      <div className='topSideMenu__menu'>
        <HiOutlineMenuAlt2 style={{width: 46, height: 46}} />
      </div>
    </div>
  );
}

export default TopSideMenu;
