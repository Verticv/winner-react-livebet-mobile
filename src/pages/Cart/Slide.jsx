import React from 'react';
import './style.css';

function Slide({ name, number }) {
  return (
    <div className='cart-slide'>
      <p>{name}</p>
      <p className='slide-num'>{number}</p>
    </div>
  );
}

export default Slide;
