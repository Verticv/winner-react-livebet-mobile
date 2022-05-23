import React from 'react';

function Slide({ name, number, className }) {
  return (
    <div className={`cart-slide ${className}`}>
      <p>{name}</p>
      <p className='slide-num'>{number}</p>
    </div>
  );
}

export default Slide;
