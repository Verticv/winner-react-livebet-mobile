import React from 'react';
import line from '../../assets/line_22.png';

function MidSecBtn({
  number1, number2, number3, rightText, leftText,
}) {
  return (
    <>
      <div className='bet-btn-container blur'>
        <p>{rightText}</p>
        <button type='button' className='bet-btn-numbers blur '>

          <p>{number1}</p>
          <img src={line} alt='line' />
          <p>{number2}</p>
          <img src={line} alt='line' />
          <p>{number3}</p>

        </button>
        <p>{leftText}</p>

      </div>

    </>

  );
}

export default MidSecBtn;
