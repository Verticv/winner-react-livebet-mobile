import React from 'react';

function Slide({ name, number, className }) {
  return (
    <div className={`cart-slide ${className}`}>
      {name === '186123533' ? <p style={{color: '#e9ca4e'}}><span style={{color: '#fff'}}>ID :</span> {name}</p> : <p>{name}</p>}
      {number === '183,000' ? <p className='slide-num'><span style={{color: '#fff', marginRight: '3.14rem', fontSize: '3.42rem'}}>베팅대기중 </span>{number}</p> :<p className='slide-num'>{number}</p>}
    </div>
  );
}

export default Slide;
