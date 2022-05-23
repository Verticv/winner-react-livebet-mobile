import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = ({ id, isActive, withPlus, idBlueSelected }) => {
  let buttonClass = 'inactive-button';
  if (idBlueSelected === id){
    if (isActive && withPlus) {
      buttonClass = 'active-button active-with-plus';
    } else if (isActive) {
      buttonClass = 'active-button';
    }
  }

  return (
    <Link className={`nLive-btn ${buttonClass}`} to='/nonLiveBet'>
      <button type='button' className='nLive-side-btn'>
        정보
      </button>
    </Link>
  );
};

export default AddButton;
