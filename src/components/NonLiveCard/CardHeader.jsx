import React from 'react';
import './style.css';
import ball from '../../assets/football.png';

const CardHeader = ({ flag, name }) => (

  <div className='nLive-main-con'>

    <div className='nLive-sub-con'>
      <img src={ball} alt='ball' />
      <img src={flag} alt='flag' />
      <p>{name}</p>
    </div>

  </div>

);

export default CardHeader;
