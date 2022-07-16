import React, { useState, useEffect } from 'react';
import { isIOS } from 'react-device-detect';
import { NavLink } from 'react-router-dom';

function NavButtons({
  icon, clickedIcon, text, number, isActive, link = '/', scrollPosition
}) {
  const [iconToggle, setIconToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === link) {
      setIconToggle(true);
    }
  }, [link]);

  return (
    <NavLink
      to={{ pathname: link, state: { scrollPosition: (scrollPosition  || 0 )}}}
      exact
      className={isActive ? 'btnClass clicked' : 'btnClass'}
      activeClassName='clicked'
    >
      <img src={iconToggle || isActive ? clickedIcon : icon} alt='icon' />
      <p className='text' style={{ letterSpacing: isIOS ? '-0.2rem' : ''  }}>{text}</p>
      <p className='num'>
        {number}
      </p>
    </NavLink>
  );
}

export default NavButtons;
