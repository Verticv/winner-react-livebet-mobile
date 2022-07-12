import React, { useState } from 'react';
import Dropdown from './DropDownItems';
import chronology from '../../assets/images/imgs/ee3.png';
import cup from '../../assets/images/imgs/ee1.png';
import Modal from '../Modal';
import useModal from '../../hooks/useModal';
import btnArrow from '../../assets/images/imgs/btn-arrow.png';
import cup2 from '../../assets/images/imgs/ee2.png';

const MainHeader = () => {
  const { toggle, visible } = useModal();
  const [isSelected, setIsSelected] = useState(true);
  const [isCheck, setIsCheck] = useState([]);
  const [temp, setTemp] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const changeName = () => {
    setIsSelected((prev) => !prev);
  };
  const banksOptions = [
    "전체",
    "진행중",
    "예정중",
  ];
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
          <button type='submit' className={`btn ${isClick && temp.length > 0 ? 'active' : ''}`}
            onClick={() => {
              toggle();
              setIsCheck(temp);
            }}>
            <div className='button-pho'>
              <img style={{ marginRight: '-0.2rem', marginLeft: '-0.1rem', marginTop: '0.2rem' }} className='icon' src={cup} alt='' />
              <p className='text'>리그선택</p>
            </div>
          </button>
          <button type='submit' className='btn' onClick={changeName}>
            <div className='button-pho'>
              <img className='icon' src={isSelected ? chronology : cup2} alt='' />
              {isSelected ? <p className='text'>리그순보기</p> : <p className='text'>리그순</p>}
              <img style={{ marginRight: '-0.1rem', marginTop: '0.4rem' }} className='white-arrow' src={btnArrow} alt='' />
            </div>
          </button>
          <div className='dropdown'>
            <Dropdown options={banksOptions} isSignup={true} />
          </div>
        </div>
      </div>
      <Modal visible={visible} toggle={toggle} isCheck={isCheck} setIsCheck={setIsCheck} isClick={isClick} setIsClick={setIsClick} temp={temp} setTemp={setTemp} />
    </>
  );
};

export default MainHeader;
