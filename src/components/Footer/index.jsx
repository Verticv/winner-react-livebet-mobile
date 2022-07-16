import React from 'react';
import { useHistory } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import cart from '../../assets/images/other/cart.png';

const Footer = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cart');
  };

  const handleKeyDown = () => {
  };

  return (
    <>
      <div onClick={handleClick} className='footer-container' type='button' onKeyDown={handleKeyDown} role='button' tabIndex={0}>
        <footer className='flex'>
          <div className='sub-container1'>
            <img src={cart} alt='cart' />
            <p className='main-p' style={{ letterSpacing: isIOS ? '-0.2rem' : ''  }}>베팅카트 열기</p>
          </div>
          <div className='vl' />
          <div className='sub-container2'>
            <p style={{ letterSpacing: isIOS ? '-0.2rem' : ''  }}>
              선택경기
              <span style={{ marginLeft: '1.7rem'}}>3<span className='noto-sans'>건</span></span>
            </p>
            <p className='sub-p' style={{ letterSpacing: isIOS ? '-0.2rem' : ''  }}>예상배당<span style={{ marginLeft: '2rem'}}>4.25</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;