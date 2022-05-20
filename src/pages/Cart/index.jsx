import React from 'react';
import cartIcon from '../../assets/cart.png';
import Slide from './Slide';
import { Button1, Button2 } from './Button';
import arrow from '../../assets/images/imgs/icon-3.png';
import buttonIcon from '../../assets/images/imgs/button-icon.png';
import repeat from '../../assets/ico_5.png';
import mark from '../../assets/ico_6.png';
import exit from '../../assets/exit.png';
import chart from '../../assets/ico_2.png';

const Cart = ({ cart, removeCard }) => {
  const CartItem = cart.map((index) => (
    <div key={index} className='cart-items'>
      <div className='cart-items-team'>
        <p>FC바로셀로나  VS  레알마드리드 </p>
        <button type='button' onClick={removeCard}>
          <img src={exit} alt={exit} />
        </button>

      </div>

      <p className='margin , margin-bottom'>승무패(홈) - FC바로셀로나</p>
      <p className='margin'>6.11  5.01</p>

    </div>
  ));
  return (
    <div>
      <div className='line' />
      <div className='cart-header'>
        <div className='cart-right-header'>
          <div>
            <img src={cartIcon} alt='cart' className='cart-icon' />
            <p style={{ marginLeft: '2rem', marginRight: '1rem' }}>BETSLIP</p>
            <div style={{ marginLeft: '.5rem' }} className='cart-num'>
              2
            </div>
          </div>
        </div>
        <button type='button' className='cart-arrow' onClick={removeCard}>
          <img src={arrow} alt='' className='arrow' />

        </button>
      </div>

      <div className='cart-name'>
        {cart.length === 0 && ' 실시간 라이브경기실시간'}
        {CartItem}

      </div>

      <div className='card-container'>
        <Slide className='cart-main-slide yellow' name='실시간' number='3,000,000' />
        <Slide className='cart-other-slide' name='라이브경기' number='5000' />
        <div className='line' />
        <Slide name='라이브경기' number='1,000,000' />
        <div className='line' />
        <Slide name='라이브경기' number='2,000,000' />
        <div className='line' />
        <Slide name='라이브경기' number='0.00' />
        <Slide className='cart-main-slide blue' name='라이브경기' number='0.00' />
        <Slide className='cart-main-slide green' name='라이브경기' number='0' />

      </div>

      <div className='cart-button-text cart-main-slide'>
        <p className='cart-p-repeat'>이기실시간</p>
        <div className='cart-button-repeat'>
          <div className='img-cart-rep'>
            <img src={repeat} alt='' />
          </div>
          <p>0</p>
        </div>
      </div>

      <div>
        <div className='cart-btns'>
          <Button1>5000</Button1>
          <Button1>5000</Button1>
          <Button1>5000</Button1>
          <Button1>5000</Button1>
          <Button1>5000</Button1>
          <Button1 className='active'>최대</Button1>
        </div>
        <div className='cart-two-btns'>
          <Button2>
            <img src={exit} alt='' style={{ marginRight: '15px' }} />
            <p>이기실시간</p>
          </Button2>
          <Button2 className='active'>
            <img src={chart} alt='' style={{ marginRight: '15px' }} />
            <p>이기실시간</p>
          </Button2>
        </div>
      </div>
      <div className='cart-bottom-container'>
        <div className='cart-mark'>
          <img src={mark} alt='' />
          <p>이기실</p>
        </div>
        <div className='cart-repeat'>
          <p>10</p>
          <img src={repeat} alt='' />
        </div>
      </div>
      <div className='cart-sub-content'>
        {cart.length === 0 && ' 실시간 라이브경기실시간'}
        {CartItem}
      </div>
      <div className='cart-button-container'>
        <button
          type='button'
        >
          <img className='button-icon' src={buttonIcon} alt='' />
          라이브경기실시간
        </button>
      </div>

    </div>
  );
};

export default Cart;
