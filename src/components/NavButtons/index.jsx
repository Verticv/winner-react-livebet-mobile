import React, { useState } from 'react';

import './style.css';

function NavButtons({
  icon, text, number,
}) {
  const [btnClass, setBtnClass] = useState(false);

  const handelClick = () => {
    setBtnClass(!btnClass);
  };

  return (
    <button
      type='submit'
      onClick={handelClick}
      className={btnClass ? 'btnClass clicked' : 'btnClass'}
    >
      <img style={{ margin: '0' }} src={icon} alt='icon' />
      <p style={{ margin: '0' }}>{text}</p>
      <p className='num' style={{ margin: '0' }}>
        {' '}
        {number}
      </p>
    </button>
  );
}

export default NavButtons;
