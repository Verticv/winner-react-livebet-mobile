import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function NavButtons({
  icon, text, number, link = '',
}) {
  const [btnClass, setBtnClass] = useState(false);

  return (
    <button
      type='submit'
      onClick={() => {
        if (btnClass) {
          setBtnClass(false);
        } else {
          setBtnClass(true);
        }
      }}
      className={btnClass ? 'btnClass clicked' : 'btnClass'}
    >
      <Link to={link}>

        <img style={{ margin: '0' }} src={icon} alt='icon' />
        <p style={{ margin: '0' }}>{text}</p>
        <p className='num' style={{ margin: '0' }}>
          {' '}
          {number}
        </p>
      </Link>
    </button>
  );
}

export default NavButtons;
