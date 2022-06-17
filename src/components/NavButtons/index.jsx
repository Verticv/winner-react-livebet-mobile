import React, { useState, useEffect } from 'react';
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
      to={{ pathname: link, state: { scrollPosition } }}
      exact
      className={isActive ? 'btnClass clicked' : 'btnClass'}
      activeClassName='clicked'
    >
      <img src={iconToggle || isActive ? clickedIcon : icon} alt='icon' />
      <p className='text'>{text}</p>
      <p className='num'>
        {number}
      </p>
    </NavLink>
  );
}

export default NavButtons;
