import React, { useState } from 'react';
import { isIOS } from 'react-device-detect';
import blueArrow from '../../assets/images/imgs/blue-btn-ARR.png';
import redArrow from '../../assets/images/imgs/red-btn-ARR.png';

function MidSecBtn({
  number1, number2, number3, rightText, leftText, add, isFirstItemRed,
}) {
  const [leftActiveBackground, setLeftActiveBackground] = useState(false);
  const [middleActiveBackground, setMiddleActiveBackground] = useState(false);
  const [rightActiveBackground, setRightActiveBackground] = useState(false);

  return (
    <div className={`bet-button-container ${rightActiveBackground ? 'first-section-red' : ''}`}>
      <div className='bet-btn-container'>
        <div className='bet-btn-skew' onClick={() => {
          add();
          setRightActiveBackground((prev) => !prev);
        }}>
          <p>{rightText.length > 19 ? `${rightText.slice(0, 19)}...` : rightText}</p>
          <button className={`add-button ${isFirstItemRed ? 'red-button' : ''}`} style={{transform: !isFirstItemRed ? 'translateY(0.1rem)' : ''}}  type='button' onClick={add}>
            {isFirstItemRed ? <img className='red-arrow' src={redArrow} alt='' /> : null}
            <span style={{ paddingTop: '3rem', paddingRight: '0', letterSpacing: isIOS ? '-0.2rem' : ''}}>
              {number1}
            </span>
          </button>
        </div>
        <div className={`bet-btn-skew bet-btn-numbers ${middleActiveBackground ? 'middle-content' : ''}`} onClick={() => {
          add();
          setMiddleActiveBackground((prev) => !prev)
        }}>
          <button 
            className='add-button' 
            type='button' 
            style={{transform:'translateY(0.1rem)'}} 
            onClick={add}>
            <span style={{ paddingTop: '4rem', paddingBottom: '4rem', letterSpacing: isIOS ? '-0.2rem' : '' }}>{number2}</span></button>
        </div>
        <div className={`bet-btn-skew ${leftActiveBackground ? 'blue-section' : ''}`} onClick={() => {
          add();
          setLeftActiveBackground((prev) => !prev);
        }}>
          <button className={`add-button ${isFirstItemRed ? 'blue-button' : ''}`} style={{transform:!isFirstItemRed ? 'translateY(0.1rem)' : ''}}  type='button' onClick={add}>
            {isFirstItemRed ? <img className='blue-arrow' src={blueArrow} alt='' /> : null}
            <span style={{ padding: isFirstItemRed ? '3rem 0' : '3rem 0 3rem 1.9rem', letterSpacing: isIOS ? '-0.2rem' : '' }}>
              {number3}
            </span>
          </button>
          <p style={{ textAlign: 'end' }}>{leftText.length > 19 ? `${leftText.slice(0, 19)}...` : leftText}</p>
        </div>
      </div>
    </div>

  );
}

export default MidSecBtn;
