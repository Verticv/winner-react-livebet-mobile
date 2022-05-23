import React from 'react';

function MidSecBtn({
  number1, number2, number3, rightText, leftText, add, isFirstItemRed,
}) {
  // const [leftActiveBackground, setLeftActiveBackground] = useState(false);
  // const [middleActiveBackground, setMiddleActiveBackground] = useState(false);
  // const [rightActiveBackground, setRightActiveBackground] = useState(false);
  return (
    <>
      <div className='bet-btn-container'>
        <div className='bet-btn-skew'>
          <p>{rightText}</p>
          <button className={`add-button ${isFirstItemRed ? 'red-button' : ''}`} type='button' onClick={add}>{number1}</button>
        </div>
        <div className='bet-btn-skew bet-btn-numbers'>
          <button className='add-button' type='button' onClick={add}>{number2}</button>
        </div>
        <div className='bet-btn-skew'>
          <button className={`add-button ${isFirstItemRed ? 'blue-button' : ''}`} type='button' onClick={add}>{number3}</button>
          <p>{leftText}</p>
        </div>
      </div>

    </>

  );
}

export default MidSecBtn;
