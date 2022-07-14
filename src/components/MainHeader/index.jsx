/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Dropdown from './DropDownItems';
import chronology from '../../assets/images/imgs/ee3.png';
import cup from '../../assets/images/imgs/ee1.png';
import Modal from '../Modal';
import useModal from '../../hooks/useModal';
import btnArrow from '../../assets/images/imgs/btn-arrow.png';
import cup2 from '../../assets/images/imgs/ee2.png';
import { useSelector, useDispatch } from 'react-redux';
import { mainHeader } from '../../store/feature/userSlice';
import { useLayoutEffect } from 'react';

const MainHeader = () => {
  const dispatch = useDispatch();
  const { values } = useSelector((state) => state.cards);
  const { toggle, visible } = useModal();
  const [isCheck, setIsCheck] = useState([]);
  const [temp, setTemp] = useState(values.btn1);
  const [isClick, setIsClick] = useState(false);
  const [btn2, setBtn2] = useState(values.btn2);
  const [btn3, setBtn3] = useState(values.btn3);
  const changeName = (e) => {
    if (e.target.textContent === '시간순') {
      setBtn2('리그순');
    }
    else if (e.target.textContent === '리그순') {
      setBtn2('시간순');
    }
  };
  const parent = (e) => {
    const content = e.target.closest("#changeBtn");
    if (content?.children[0]?.children[1]?.textContent  === '시간순') {
      setBtn2('리그순');
    }
    else if (content?.children[0]?.children[1]?.textContent === '리그순') {
      setBtn2('시간순');
    }
  }
  const banksOptions = [
    "전체",
    "진행중",
    "예정중",
  ];
  useLayoutEffect(() => {
    dispatch(mainHeader({ btn1: temp, btn2: btn2, btn3: btn3 }));
  }, [temp, btn2, btn3]);

  return (
    <>
      <div className='container-main-header'>
        <div className='right'>
          <span className='dot' />
          {window.location.pathname === '/favorite' ? <p>즐겨찾기</p> : null}
          {window.location.pathname === '/' ? <p>전체</p> : null}
          {window.location.pathname === '/mainLiveList' ? <p>축구</p> : null}
          {window.location.pathname === '/mainNonLiveList' ? <p>야구</p> : null}
          {window.location.pathname === '/basketball' ? <p>농구</p> : null}
          {window.location.pathname === '/volleyball' ? <p>배구</p> : null}
          {window.location.pathname === '/iceHockey' ? <p>아이스하키</p> : null}
          {window.location.pathname === '/tennis' ? <p>테니스</p> : null}
          {window.location.pathname === '/handball' ? <p>핸드볼</p> : null}
          {window.location.pathname === '/ufc' ? <p>UFC</p> : null}
          <p className='head-p'>
            80
          </p>
        </div>
        <div className='button-container'>
          <button type='submit' className={`btn ${temp.length > 0 ? 'active' : ''}`}
            onClick={(e) => {
              toggle();
              setIsCheck(temp);
            }}>
            <div className='button-pho'>
              <img style={{ marginRight: '-0.2rem', marginLeft: '-0.1rem', marginTop: '0.2rem' }} className='icon' src={cup} alt='' />
              <p className='text'>리그</p>
            </div>
          </button>
          <button type='submit' className='btn' onClick={changeName} id='changeBtn'>
            <div className='button-pho'>
              <img onClick={parent} className='icon' src={btn2 === '시간순' ? chronology : cup2} alt='' />
              {<p  className='text'>{btn2}</p>}
              <img onClick={parent} style={{ marginRight: '-0.1rem', marginTop: '0.4rem' }} className='white-arrow' src={btnArrow} alt='' />
            </div>
          </button>
          <div className='dropdown'>
            <Dropdown btn3={btn3} setBtn3={setBtn3} options={banksOptions} isSignup={true} />
          </div>
        </div>
      </div>
      <Modal visible={visible} toggle={toggle} isCheck={isCheck} setIsCheck={setIsCheck} isClick={isClick} setIsClick={setIsClick} temp={temp} setTemp={setTemp} />
    </>
  );
};

export default MainHeader;
