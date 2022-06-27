import React, { useRef, useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavButtons from '../NavButtons';
import star from '../../assets/images/imgs/icoico6.png';
import basketBall from '../../assets/images/imgs/icoico5.png';
import footBall from '../../assets/images/imgs/icoico4.png';
import ball from '../../assets/images/imgs/icoico3.png';
import valBall from '../../assets/images/imgs/icoico2.png';
import bally from '../../assets/images/imgs/icoico.png';
// import ballyBlack from '../../assets/images/bally/bally-black.png';
import iceHockey from '../../assets/images/imgs/i1co.png';
import tennis from '../../assets/images/imgs/i2co.png';
import handball from '../../assets/images/imgs/i3co.png';
import ufc from '../../assets/images/imgs/i4co.png';

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
        <NavButtons scrollPosition={scrollPosition} icon={star} clickedIcon={star} text='즐겨찾기' number={number} link='/favorite' />
        <NavButtons scrollPosition={scrollPosition} icon={basketBall} clickedIcon={basketBall} text='전체' number={number} link='/' />
        <NavButtons scrollPosition={scrollPosition} icon={footBall} clickedIcon={footBall} text='축구' number={number} link='/mainLiveList' />
        <NavButtons scrollPosition={scrollPosition} icon={ball} clickedIcon={ball} text='야구' number={number} link='/mainNonLiveList' />
        <NavButtons scrollPosition={scrollPosition} icon={valBall} clickedIcon={valBall} text='농구' number={number} link='/basketball' />
        <NavButtons scrollPosition={scrollPosition} icon={bally} clickedIcon={bally} text='배구' number={number} link='/volleyball' />
        <NavButtons scrollPosition={scrollPosition} icon={iceHockey} clickedIcon={iceHockey} text='아이스하키' number={number} link='/iceHockey' />
        <NavButtons scrollPosition={scrollPosition} icon={tennis} clickedIcon={tennis} text='테니스' number={number} link='/tennis' />
        <NavButtons scrollPosition={scrollPosition} icon={handball} clickedIcon={handball} text='핸드볼' number={number} link='/handball' />
        <NavButtons scrollPosition={scrollPosition} icon={ufc} clickedIcon={ufc} text='UFC' number={number} link='/ufc' />
      </div>
      <div className='shadow'></div>
    </div>
  );
}

export default NavBar;
