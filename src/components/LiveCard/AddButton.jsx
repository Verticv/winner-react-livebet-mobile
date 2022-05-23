import React from 'react';
import { Link } from 'react-router-dom';
import activePlus from '../../assets/images/plus/plus-acive.png';
import inactivePlus from '../../assets/images/plus/plus-inacive.png';

const AddButton = ({ value, isActive, withPlus, idSelect, setIsClicked, id }) => {
  let buttonClass = 'inactive-button inactive-with-plus';
  if(id === idSelect){
    if (isActive && withPlus) {
      buttonClass = 'active-button active-with-plus';
    } else if (!isActive && withPlus) {
      buttonClass = 'inactive-button inactive-with-plus';
    } else if (isActive) {
      buttonClass = 'active-button';
    }
  }
  return (
    <Link to='/liveBet' className='section-num'>
      <button type='button' className={`live-btn ${buttonClass}`}>
        <img src={isActive && idSelect === id ? activePlus : inactivePlus} alt='' />
        <p>{value}</p>
      </button>
    </Link>
  );
};

export default AddButton;
