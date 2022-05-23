import React from 'react';
import c from '../../assets/images/other/cornner.png';
import p from '../../assets/images/other/plenty.png';
import footBallWhite from '../../assets/images/football/football-white.png';

const CardHeader = ({
  id, flag, name, show, isActive, setIsClicked, idSelect, isIdSelected
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className={`main-con ${id === idSelect ? 'active' : ''}`}>
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
