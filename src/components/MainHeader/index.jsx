import React, { useState } from 'react';
import cup from '../../assets/images/cup/cup-gold.png';
import chronology from '../../assets/images/chronology/chronology-white.png';
import Modal from '../Modal';
import useModal from '../../hooks/useModal';

const MainHeader = () => {
  const { toggle, visible } = useModal();
  const [isSelected, setIsSelected] = useState(true);
  const [isCheck, setIsCheck] = useState([]);
  const [temp, setTemp] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const changeName = () => {
    setIsSelected((prev) => !prev);
  };
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
              <img src={cup} alt='' />
              <p>리그선택</p>
            </div>
          </button>
          <button type='submit' className='btn active' onClick={changeName}>
            <div className='button-pho'>
              <img src={isSelected ? chronology : cup} alt='' />
              {isSelected ? <p>시간순</p> : <p>리그순보기</p>}
            </div>
          </button>
        </div>
      </div>
      <Modal visible={visible} toggle={toggle} isCheck={isCheck} setIsCheck={setIsCheck} isClick={isClick} setIsClick={setIsClick} temp={temp} setTemp={setTemp}/>
    </>

  );
};

export default MainHeader;
