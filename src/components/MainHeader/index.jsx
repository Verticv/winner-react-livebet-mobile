import React from 'react';
import cup from '../../assets/images/cup/cup-gold.png';
import chronology from '../../assets/images/chronology/chronology-white.png';
import arrow from '../../assets/images/arrow/arrow-white.png';

import Modal from '../Modal';
import useModal from '../../hooks/useModal';

const MainHeader = () => {
  const { toggle, visible } = useModal();

  return (
    <>
      <div className='container-main-header'>
        <div className='right'>
          <span className='dot' />
          <p>축구</p>
          <p className='head-p'>
            80
          </p>
        </div>
        <div className='button-container'>
          <button type='submit' className='btn' onClick={toggle}>
            <div className='button-pho'>
              <img src={cup} alt='' />
              <p>리그선택</p>
            </div>

          </button>
          <button type='submit' className='btn active'>
            <div className='button-pho'>
              <img src={chronology} alt='' />
              <p>시간순</p>
              <img className='arrow' src={arrow} alt='' />
            </div>
          </button>
        </div>
      </div>
      <Modal visible={visible} toggle={toggle} />
    </>

  );
};

export default MainHeader;
