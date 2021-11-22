import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NavButtons({
  icon, clickedIcon, text, number, isActive, link = '',
}) {
  const history = useHistory();
  const [btnClass, setBtnClass] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);

  const handelClick = () => {
    setBtnClass(!btnClass);
    setIconToggle(!iconToggle);
    if (link) {
      history.push(link);
    }
  };

  return (
    <button
      type='submit'
      onClick={handelClick}
      className={btnClass || isActive ? 'btnClass clicked' : 'btnClass'}
    >
      <img src={iconToggle || isActive ? clickedIcon : icon} alt='icon' />
      <p className='text'>{text}</p>
      <p className='num'>
        {number}
      </p>
    </button>
  );
}

export default NavButtons;
