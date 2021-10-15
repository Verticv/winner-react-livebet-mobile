import React from 'react';
import './style.css';
import c from '../../assets/c.png';
import p from '../../assets/p.png';
import ball from '../../assets/football.png';

const CardHeader = ({ flag, name, show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className='main-con'>

      <div className='sub-con'>
        <img src={ball} alt='ball' className='live-header-ball' />
        <img src={flag} alt='flag' className='live-header-flag' />
        <p>{name}</p>
      </div>

      <div className='sub2'>
        <img src={c} alt='' />
        <div className='square sq1' />
        <div className='square sq2' />
        <img src={p} alt='' />
        <img src={ball} alt='' />
      </div>

    </div>

  );
};

export default CardHeader;
