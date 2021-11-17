import React from 'react';
import ball from '../../assets/football.png';

const CardHeader = ({ flag, name, show }) => {
  if (!show) {
    return null;
  }
  return (

    <div className='nLive-main-con'>

      <div className='nLive-sub-con'>
        <img src={ball} alt='ball' />
        <img src={flag} alt='flag' className='nLive-header-flag' />
        <p>{name}</p>
      </div>

    </div>

  );
};

export default CardHeader;
