/* eslint-disable max-len */
import React, { useState } from 'react';
import arrow from '../../assets/image1.png';
import MidSecBtn from './MidSecBtn';

function DropDown({
  text, number1, rightText, leftText, number2, number3, add,
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

        <button type='button' className='bet-arrow-img' onClick={handleIsClick}><img src={arrow} alt='arrow' /></button>
      </div>
      {isClicked ? (
        <>
          <div className='bet-button-container'>
            <MidSecBtn add={add} number1={number1} number2={number2} number3={number3} rightText={rightText} leftText={leftText} />
          </div>

          <div className='bet-button-container'>
            <MidSecBtn add={add} number1={number1} number2={number2} number3={number3} rightText={rightText} leftText={leftText} />
          </div>

        </>
      ) : null}

    </div>
  );
}

export default DropDown;
