import React from 'react';
import photo from '../../assets/img.png';
import Modal from '../Modal';
import useModal from '../../hooks/useModal';
import './style.css';

const MainHeader = () => {
  const { toggle, visible } = useModal();

  return (
    <>
      <div className='container-main-header'>
        <div className='right'>
          <span className='dot' />
          <p>브경</p>
          <p className='head-p'>
            80
          </p>
        </div>
        <div className='button-container'>
          <button type='submit' className='btn' onClick={toggle}>
            <div className='button-pho'>
              <img src={photo} alt='' />
              <p>선택경기</p>
            </div>

          </button>
          <button type='submit' className='btn'>선택경기</button>
        </div>
      </div>
      <Modal visible={visible} toggle={toggle} />
    </>

  );
};

export default MainHeader;
