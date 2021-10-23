import React from 'react';

function MidSecBtn({
  number1, number2, number3, rightText, leftText, add,
}) {
  return (
    <>
      <div className='bet-btn-container blur'>
        <p>{rightText}</p>
        <button type='button' className='bet-btn-numbers blur '>

          <button className='add-button' type='button' onClick={add}>{number1}</button>
          <button className='add-button' type='button' onClick={add}>{number2}</button>
          <button className='add-button' type='button' onClick={add}>{number3}</button>

        </button>
        <p>{leftText}</p>

      </div>

    </>

  );
}

export default MidSecBtn;
