import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = ({ isActive, withPlus }) => {
  let buttonClass = 'inactive-button';

  if (isActive && withPlus) {
    buttonClass = 'active-button active-with-plus';
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
