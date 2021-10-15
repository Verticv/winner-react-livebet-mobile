import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import cart from '../../assets/cart.png';

const Footer = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cart');
  };

  const handleKeyDown = () => {
    // eslint-disable-next-line no-console
    console.log('KEy Down');
  };

  return (
    <>
      <div onClick={handleClick} className='container' type='button' onKeyDown={handleKeyDown} role='button' tabIndex={0}>
        <footer className='footer flex'>
          <div className='sub-container1'>
            <img src={cart} alt='cart' />
            <p className='main-p'>베팅카드 열기</p>
          </div>

          <div className='vl' />

          <div className='sub-container2'>
            <p>
              선택경기
              {' '}
              <span>3 건</span>
            </p>
            <p className='sub-p'>
              예상배당
              {' '}
              <span>4.25</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
