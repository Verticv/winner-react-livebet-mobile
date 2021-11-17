import React, { useState } from 'react';

// import './style.css';

function NavButtons({
  icon, clickedIcon, text, number,
}) {
  const [btnClass, setBtnClass] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);

  const handelClick = () => {
    setBtnClass(!btnClass);
    setIconToggle(!iconToggle);
  };

  return (
    <button
      type='submit'
      onClick={handelClick}
      className={btnClass ? 'btnClass clicked' : 'btnClass'}
    >
      <img src={iconToggle ? clickedIcon : icon} alt='icon' />
      <p className='text'>{text}</p>
      <p className='num'>
        {number}
      </p>
    </button>
  );
}

export default NavButtons;
