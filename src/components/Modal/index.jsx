import React from 'react';
import ReactDOM from 'react-dom';
import CheckBoxesContainer from './CheckBoxesContainer';
import exit from '../../assets/exit.png';

const Modal = ({ visible, toggle, isCheck, setIsCheck, isClick, setIsClick, temp, setTemp }) => {
return (visible ? ReactDOM.createPortal(
  <div className='modal'>
    <div className='modal-pop' role='dialog' aria-modal='true'>
      <div
        className='modal-header'
      >
        <p style={{ flexGrow: 2, textAlign: 'center' }}>리그선택</p>
        <img
          className='exit-img'
          src={exit}
          // onKeyDown={() => { console.log('Key down') }}
          role='presentation'
          alt='exit'
          onClick={toggle}
        />
      </div>
      <div className='modal-body'>
        <CheckBoxesContainer isCheck={isCheck} setIsCheck={setIsCheck} temp={temp} setTemp={setTemp} />
      </div>
      <div className='buttons-container modal-footer'>
        <button type='button' onClick={() => {
          toggle();
          setIsClick(true);
          setTemp(temp);
        }}>취소</button>
        <button type='button' onClick={() => {
          toggle();
          setIsClick(true);
          setTemp(isCheck);
          }}>확인</button>
      </div>
    </div>
    <div className='modal-overlay' />
  </div>, document.body,
) : null);
}
export default Modal;
