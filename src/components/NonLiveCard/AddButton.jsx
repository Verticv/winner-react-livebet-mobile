import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = ({ id, isActive, withPlus, idBlueSelected, index, nonLiveData, setNonLiveData, isFavorite, flag }) => {
  let buttonClass = 'inactive-button';
  if (idBlueSelected === id) {
    if (isActive && withPlus) {
      buttonClass = 'active-button active-with-plus card-button-blue-active';
    } else if (isActive) {
      buttonClass = 'active-button';
    }
  }
  return (
    <div>
      {isFavorite
        ? <button type='button' id={index} className={`card-button-blue nLive-btn ${buttonClass}`}
        onClick={(e) => {
          let temp;      
          const newCard = [...nonLiveData];
          if(+e.target.id !== 0){
            temp = newCard[e.target.id - 1];
            newCard[e.target.id - 1] = newCard[e.target.id];
            newCard[e.target.id] = temp;
          } 
          setNonLiveData(newCard);
        }} /> 
        : null
      }
      <Link className={`nLive-btn ${buttonClass}`} to='/nonLiveBet'>
        <button type='button' className='nLive-side-btn' style={{height: !isFavorite && flag ? '22.6875rem' : '15rem'}}>
          정보
        </button>
      </Link>
    </div>
  );
};

export default AddButton;
