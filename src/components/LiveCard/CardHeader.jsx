import React from 'react';
import c from '../../assets/c.png';
import p from '../../assets/p.png';
// import ball from '../../assets/football.png';
import footBallWhite from '../../assets/images/football/football-white.png';

const CardHeader = ({
  flag, name, show, isActive,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className={`main-con ${isActive ? 'active' : ''}`}>

      <div className='sub-con'>
        <img className='ball' src={footBallWhite} alt='ball' />
        <img src={flag} alt='flag' className='live-header-flag' />
        <p>{name}</p>
      </div>

      <div className='sub2'>
        <img src={c} alt='' />
        <div className='square sq1' />
        <div className='square sq2' />
        <img src={p} alt='' />
        <img className='ball' src={footBallWhite} alt='' />
      </div>

    </div>

  );
};

export default CardHeader;
