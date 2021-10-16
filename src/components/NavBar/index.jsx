import React from 'react';
import NavButtons from '../NavButtons';
import star from '../../assets/star.png';
import basketBall from '../../assets/basketball.png';
import footBall from '../../assets/football.png';
import ball from '../../assets/ball.png';
import valBall from '../../assets/valball.png';
import bally from '../../assets/bally.png';

import './style.css';

const number = 80;

function NavBar() {
  return (
    <div className='nav'>
      <NavButtons icon={star} text='안녕하' number={number} link='/favourite' />
      <NavButtons icon={basketBall} text='안녕하' number={number} />
      <NavButtons icon={footBall} text='안녕하' number={number} />
      <NavButtons icon={ball} text='안녕하' number={number} />
      <NavButtons icon={valBall} text='안녕하' number={number} />
      <NavButtons icon={bally} text='안녕하' number={number} />
    </div>
  );
}

export default NavBar;
