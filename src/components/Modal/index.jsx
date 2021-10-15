import React from 'react';
import ReactDOM from 'react-dom';
import CheckBoxesContainer from './CheckBoxesContainer';
import exit from '../../assets/exit.png';

const Modal = ({ visible, toggle }) => (visible ? ReactDOM.createPortal(

  <div className='modal'>
    <div className='modal-pop' role='dialog' aria-modal='true'>
      <div
        className='sub-container'
      >
        <p style={{ flexGrow: 2, textAlign: 'center' }}>예상배예상</p>
        <img
          className='exit-img'
          src={exit}
          // eslint-disable-next-line no-console
          onKeyDown={() => { console.log('Key down'); }}
          role='presentation'
          alt='exit'
          onClick={toggle}
        />
      </div>
      <div>
        <CheckBoxesContainer />
        <div className='buttons-container'>
          <button className='button' type='button' onClick={toggle}>예상배</button>
          <button className='button' type='button' onClick={toggle}>예상배</button>
        </div>
      </div>

    </div>
    <div className='modal-overlay' />
  </div>, document.body,
) : null);

export default Modal;
