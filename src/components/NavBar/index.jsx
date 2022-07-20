import React, { useRef, useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavButtons from '../NavButtons';
import iceHockeyWhite from '../../assets/images/iceHockey/iceHockey-gray.png';
import iceHockeyBlack from '../../assets/images/iceHockey/iceHockey-black.png';
import tennisWhite from '../../assets/images/tennis/tennis-gray.png';
import tennisBlack from '../../assets/images/tennis/tennis-black.png';
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
import handBallWhite from '../../assets/images/handball/handball-gray.png';
import handBallBlack from '../../assets/images/handball/handball-black.png';
import ufcWhite from '../../assets/images/ufc/ufc-gray.png';
import ufcBlack from '../../assets/images/ufc/ufc-black.png';

const number = 80;

function NavBar({ isActive }) {
  const container = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { state } = useLocation();
  useLayoutEffect(() => {
    container.current.scrollLeft = scrollPosition || 0;
  }, [scrollPosition]);
  useLayoutEffect(() => {
    container.current.scrollLeft = state?.scrollPosition || 0;
    // container.current.scrollTo({left:state.scrollPosition,  behavior: 'smooth'
    // })
  }, [state?.scrollPosition]);

  return (
    <div className='div-shadow'>
      <div className='nav' ref={container} onScroll={() => {
        setScrollPosition(container.current?.scrollLeft)
      }}>
        <NavButtons scrollPosition={scrollPosition} icon={starWhite} clickedIcon={starBlack} text='즐겨찾기' number={number} link='/favorite' />
        <NavButtons scrollPosition={scrollPosition} icon={basketBallWhite} clickedIcon={basketBallBlack} text='전체' number={number} link='/' />
        <NavButtons scrollPosition={scrollPosition} icon={footBallWhite} clickedIcon={footBallBlack} text='축구' number={number} link='/mainLiveList' />
        <NavButtons scrollPosition={scrollPosition} icon={ballWhite} clickedIcon={ballBlack} text='야구' number={number} link='/mainNonLiveList' />
        <NavButtons scrollPosition={scrollPosition} icon={valBallWhite} clickedIcon={valBallBlack} text='농구' number={number} link='/basketball' />
        <NavButtons scrollPosition={scrollPosition} icon={ballyWhite} clickedIcon={ballyBlack} text='배구' number={number} link='/volleyball' />
        <NavButtons scrollPosition={scrollPosition} icon={iceHockeyWhite} clickedIcon={iceHockeyBlack} text='아이스하키' number={number} link='/iceHockey' />
        <NavButtons scrollPosition={scrollPosition} icon={tennisWhite} clickedIcon={tennisBlack} text='테니스' number={number} link='/tennis' />
        <NavButtons scrollPosition={scrollPosition} icon={handBallWhite} clickedIcon={handBallBlack} text='핸드볼' number={number} link='/handball' />
        <NavButtons scrollPosition={scrollPosition} icon={ufcWhite} clickedIcon={ufcBlack} text='UFC' number={number} link='/ufc' />
      </div>
      <div className='shadow'></div>
    </div>
  );
}

export default NavBar;
