import React from 'react';
import NavButtons from '../NavButtons';
import footBallBlack from '../../assets/images/football/football-black.png';
import footBallWhite from '../../assets/images/football/football-gray.png';
import starWhite from '../../assets/images/emptyStar/star-gray.png';
import starBlack from '../../assets/images/emptyStar/star-black.png';
import basketBallWhite from '../../assets/images/basketBall/basketBall-gray.png';
import basketBallBlack from '../../assets/images/basketBall/basketBall-black.png';
import ballWhite from '../../assets/images/ball/ball-gray.png';
import ballBlack from '../../assets/images/ball/ball-black.png';
import valBallWhite from '../../assets/images/valBall/valBall-gray.png';
import valBallBlack from '../../assets/images/valBall/valBall-black.png';
import ballyWhite from '../../assets/images/bally/bally-gray.png';
import ballyBlack from '../../assets/images/bally/bally-black.png';

const number = 80;

function NavBar({ isActive }) {
  return (
    <div className='nav'>
      <NavButtons icon={starWhite} clickedIcon={starBlack} text='즐겨찾기' number={number} link='/favorite' />
      <NavButtons icon={basketBallWhite} clickedIcon={basketBallBlack} text='전체' number={number} />
      <NavButtons isActive={isActive} icon={footBallWhite} clickedIcon={footBallBlack} text='축구' number={number} />
      <NavButtons icon={ballWhite} clickedIcon={ballBlack} text='야구' number={number} />
      <NavButtons icon={valBallWhite} clickedIcon={valBallBlack} text='농구' number={number} />
      <NavButtons icon={ballyWhite} clickedIcon={ballyBlack} text='배구' number={number} />
    </div>
  );
}

export default NavBar;
