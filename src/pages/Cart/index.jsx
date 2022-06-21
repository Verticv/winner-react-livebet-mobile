import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import cartIcon from '../../assets/images/imgs/cart.png'
import Slide from './Slide';
import { Button1, Button2 } from './Button';
import arrow from '../../assets/images/imgs/icon-3.png';
import buttonIcon from '../../assets/images/imgs/button-icon.png';
import repeat from '../../assets/ico_5.png';
import mark from '../../assets/images/imgs/mark.png';
import exit from '../../assets/images/imgs/x.png';
import exitBtn from '../../assets/images/imgs/exit.png'
import chart from '../../assets/images/imgs/ico.png';
import blueArrow from '../../assets/images/imgs/blue-arrow.png'
import redArrow from '../../assets/images/imgs/arrow-red.png'

const Cart = ({ cart, setCart, removeCard }) => {
  let { goBack } = useHistory();
  const [value, setValue] = useState('0');
  const { buttonsValue } = useSelector((state) => state.cards);
  const onChangeHandler = (e) => {
    const newValue = e.target.value.replaceAll(",", "");
    const formattedValue = Number(newValue).toLocaleString(undefined, {
      minimumFractionDigits: 0,
    });
    setValue(formattedValue);
  };

  const CartItem = cart.map((index, num) => (
    <div key={num} className='cart-items'>
      <div className='cart-items-team'>
        <p>FC바로셀로나  <span style={{ color: '#c49f58' }}>VS</span>  레알마드리드 </p>
        <button type='button' id={num} className='close' onClick={(e) => removeCard(e)}>
          <img id={num} src={exit} alt={exit} />
        </button>
      </div>
      <p className='margin , margin-bottom' style={{ color: '#e5b877', paddingLeft: '2.4rem' }}>승무패(홈)  - FC바로셀로나</p>
      <p className='margin' style={{ paddingLeft: '2.4rem' }}>
        <del style={{ marginRight: '2rem' }}>6.11</del>
        {num % 2 === 0
          ? <span style={{ color: '#4195c1' }}>  5.01 <img className='arrow-card' style={{ marginLeft: '2rem', width: '2.25rem', height: '1.3125rem' }} src={blueArrow} alt='blue arrow' /></span>
          : <span style={{ color: '#4195c1' }}>  3.75 <img className='arrow-card' style={{ marginLeft: '2rem', width: '2.25rem', height: '1.3125rem' }} src={redArrow} alt='red arrow' /></span>}
      </p>
    </div>
  ));
  return (
    <div>
      <div className='line' />
      <div className='cart-header'>
        <div className='cart-right-header'>
          <div>
            <img src={cartIcon} alt='cart' className='cart-icon' />
            <p style={{ marginLeft: '2.3rem', marginRight: '2.28rem', fontSize: '3rem', marginTop: '2rem' }}>BETSLIP</p>
            <div className='cart-num'>
              2
            </div>
          </div>
        </div>
        <div className='cartBtn' onClick={goBack}>
          <button type='button' className='cart-arrow' onClick={goBack}>
            <img src={arrow} alt='' className='arrow' />
          </button>
        </div>
      </div>

      <div className='cart-name'>
        {cart.length === 0 && '베팅할 게임을 선택하세요.'}
        {CartItem}

      </div>

      <div className='card-container'>
        <Slide className='cart-main-slide yellow' name='보유금액' number='3,000,000' />
        <Slide className='cart-other-slide' name='최소 베팅금액' number='5,000' />
        <div className='line' />
        <Slide name='최대 베팅금액' number='1,000,000' />
        <div className='line' />
        <Slide name='최대 당첨금액 ' number='2,000,000' />
        <div className='line' />
        <Slide name='최대 베팅배당' number='0.00' />
        <Slide className='cart-main-slide blue' name='배당률합계' number='0.00' />
        <Slide className='cart-main-slide green' name='총적중금액' number='0' />

      </div>

      <div className='cart-button-text cart-main-slide cart-slide'>
        <p className='cart-p-repeat'>베팅금액</p>
        <div className='cart-button-repeat'>
          <div className='img-cart-rep' onClick={() => setValue('0')}>
            <img src={repeat} alt='' />
          </div>
          <input
            type="text"
            className="number cart-button-repeat"
            onChange={onChangeHandler}
            value={value}
          />
        </div>
      </div>

      <div>
        <div className='cart-btns'>
          {/* <div className='padding'> */}
            {buttonsValue.map(({ content }) => <Button1 key={content} setValue={setValue}>{content}</Button1>)}
            <Button1 className='active'>최대</Button1>

        </div>
        <div className='cart-two-btns'>
          <Button2 setCart={setCart}>
            <img src={exitBtn} alt='' style={{ marginRight: '2.5rem' }} />
            <p>전체취소</p>
          </Button2>
          <Button2 className='active'>
            <img src={chart} alt='' style={{ marginRight: '2.5rem' }} />
            <p>베팅하기</p>
          </Button2>
        </div>
      </div>
      <div className='cart-bottom-container'>
        <div className='cart-mark'>
          <img src={mark} alt='' />
          <p>나의 베팅내역</p>
        </div>
        <div className='cart-repeat'>
          <p>10</p>
          <img src={repeat} alt='' />
        </div>
      </div>
      <div className='id-wrapper'>
        <Slide className='id-section' name='186123533' number='2020-05-16 03:45:11
' />
        <div className='cart-items' style={{ height: '12.9rem', lineHeight: '1.5' }}>
          <div className='cart-items-team'>
            <p>FC바로셀로나  <span style={{ color: '#c49f58' }}>VS</span>  레알마드리드 </p>
          </div>
          <p className='margin , margin-bottom' style={{ color: '#e5b877', paddingLeft: '2.4rem' }}>승무패(홈) - FC바로셀로나 <span style={{ marginLeft: '2.4rem', color: '#4195c1' }}>5.01</span></p>
        </div>
        <div className='cart-items' style={{ height: '12.9rem', lineHeight: '1.5' }}>
          <div className='cart-items-team'>
            <p>맨체스터유나이티드  <span style={{ color: '#c49f58' }}>VS</span>  리버풀</p>
          </div>
          <p className='margin , margin-bottom' style={{ color: '#e5b877', paddingLeft: '2.75rem' }}>승무패(원정) - 리버풀 <span style={{ marginLeft: '1rem', color: '#4195c1' }}>3.75</span></p>
        </div>
      </div>
      <div className='card-content'>
        <Slide className='cart-other-slide blue' name='배당률' number='6.10' />
        <div className="line"></div>
        <Slide className='cart-other-slide' name='베팅금액' number='30,000' />
        <div className="line"></div>
        <Slide className='cart-other-slide green' name='적중금액' number='183,000' />
        <div className="line"></div>
      </div>
      <div className='cart-button-container'>
        <button
          type='button'
        >
          <img className='button-icon' src={buttonIcon} alt='' />
          <span style={{fontSize: '3.4rem'}}>전체보기</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
