import React from 'react';
// import { useHistory } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import cart2 from '../../assets/images/other/cart.png';
import Cart from '../../pages/Cart';

const Footer = ({ setIsCartDisplayed, isCartDisplayed, cart, isBlue, setCart, removeCard }) => {
  // const history = useHistory();

  const handleClick = () => {
    // history.push('/');
    setIsCartDisplayed((prev) => !prev)
  };

  const handleKeyDown = () => {
  };

  return (
    <>
      <div onClick={handleClick} className='footer-container' type='button' onKeyDown={handleKeyDown} role='button' tabIndex={0}>
        <footer className='flex'>
          <div className='sub-container1'>
            <img src={cart2} alt='cart' />
            <p className='main-p' style={{ letterSpacing: isIOS ? '-0.2rem' : '' }}>베팅카트 열기</p>
          </div>
          <div className='vl' />
          <div style={{ marginRight: '-2.5rem' }}>
            <div className='sub-container2'>
              <p style={{ letterSpacing: isIOS ? '-0.2rem' : '' }}>
                선택경기
                <span
                  style={{ marginLeft: '1.7rem' }}
                // style={{ display: 'inline-block', width: '7.4rem', textAlign: 'center' }}
                >3<span className='noto-sans'>건</span></span>
              </p>
              <p className='sub-p' style={{ letterSpacing: isIOS ? '-0.2rem' : '' }}>예상배당<span
                style={{ marginLeft: '2rem' }}
              // style={{ marginLeft: '0.1rem', display: 'inline-block', width: '6.3rem', textAlign: 'end' }}
              >4.25</span>
              </p>
            </div>
          </div>
        </footer>

      </div>
      {isCartDisplayed ? <Cart setIsCartDisplayed={setIsCartDisplayed} isCartDisplayed={isCartDisplayed} cart={cart} isBlue={isBlue} setCart={setCart} removeCard={removeCard} /> : null}

    </>
  );
};

export default Footer;