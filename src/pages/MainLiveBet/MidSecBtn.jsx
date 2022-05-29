import React, { useState } from 'react';

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
          <p>{rightText}</p>
          <button className={`add-button ${isFirstItemRed ? 'red-button' : ''}`} type='button' onClick={add}>{number1}</button>
        </div>
        <div className={`bet-btn-skew bet-btn-numbers ${middleActiveBackground ? 'middle-content' : ''}`} onClick={() => {
          add();
          setMiddleActiveBackground((prev) => !prev)
        }}>
          <button className='add-button' type='button' onClick={add}>{number2}</button>
        </div>
        <div className={`bet-btn-skew ${leftActiveBackground ? 'blue-section' : ''}`} onClick={() => {
          add();
          setLeftActiveBackground((prev) => !prev);
        }}>
          <button className={`add-button ${isFirstItemRed ? 'blue-button' : ''}`} type='button' onClick={add}>{number3}</button>
          <p>{leftText}</p>
        </div>
      </div>
    </div>

  );
}

export default MidSecBtn;
