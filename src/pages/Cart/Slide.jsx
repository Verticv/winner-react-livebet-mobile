import React from 'react';

function Slide({ name, number }) {
  return (
    <div className='cart-slide'>
      <p>{name}</p>
      <p className='slide-num'>{number}</p>
    </div>
  );
}

export default Slide;
