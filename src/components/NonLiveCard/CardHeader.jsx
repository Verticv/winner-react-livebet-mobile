import React from 'react';
import './style.css';
import c from '../../assets/c.png';
import p from '../../assets/p.png';
import ball from '../../assets/football.png';

const CardHeader = ({ flag, name }) => (
  <div className='main-con'>

    <div className='sub-con'>
      <img src={ball} alt='ball' />
      <img src={flag} alt='flag' />
      <p>{name}</p>
    </div>

  </div>

);

export default CardHeader;
