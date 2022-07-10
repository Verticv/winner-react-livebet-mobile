import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cart from '../../assets/images/other/cart.png';
import { isIOS } from 'react-device-detect';

const Footer = () => {
  useEffect(() => {
    if (isIOS) {
      console.log('isIOS', isIOS);
    }
  })
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
            <p className='main-p'
            // style={{marginLeft: '3rem'}}
            >베팅카드 열기</p>
          </div>

          {/* <div className='vl' /> */}

          <div className='sub-container2' style={{ paddingRight: `${isIOS ? '4.5rem' : '7rem' } ` }}>
            <p
            // style={{marginRight: '2rem'}}
            >
              선택경기
              <span
                style={{ marginLeft: '2rem', marginRight: '1rem' }}
              >3<span className='noto-sans'>건</span></span>
            </p>
            <p className='sub-p'>
              예상배당
              {' '}
              <span
                style={{ marginLeft: '1.3rem' }}
              >4.25</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
