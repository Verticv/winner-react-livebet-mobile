/* eslint-disable max-len */
import React, { useState } from 'react';
import arrow from '../../assets/images/arrow/liveBit-arrow-button.png';
import MidSecBtn from './MidSecBtn';

function DropDown({
  text, row1number1, row2number1, rightText, leftText, row1number2, row2number2, row1number3, row2number3, add, isFirstItemRed,
}) {
  const [isClicked, setIsClicked] = useState(true);

  const handleIsClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className='bet-dropdown'>
      <div className='bet-dropdown-header'>
        <div className='bet-dropdown-para'>
          <span className='bet-dot' />
          <p>{text}</p>
        </div>

        <button type='button' className='bet-arrow-button' onClick={handleIsClick}><img src={arrow} alt='arrow' /></button>
      </div>
      {isClicked ? (
        <>
          <div className={`bet-button-container ${isFirstItemRed ? 'first-section-red' : ''}`}>
            <MidSecBtn isFirstItemRed={isFirstItemRed} add={add} number1={row1number1} number2={row1number2} number3={row1number3} rightText={rightText} leftText={leftText} />
          </div>

          <div className='bet-button-container'>
            <MidSecBtn isFirstItemRed={isFirstItemRed} add={add} number1={row2number1} number2={row2number2} number3={row2number3} rightText={rightText} leftText={leftText} />
          </div>

        </>
      ) : null}

    </div>
  );
}

export default DropDown;
