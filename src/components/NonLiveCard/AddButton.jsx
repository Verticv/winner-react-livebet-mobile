import React from 'react';

const AddButton = ({ id, isActive, withPlus, idBlueSelected, index, nonLiveData, setNonLiveData, isFavorite, flag, isBlueDisplay, setIsBlueDisplay, setCardId, cardId, isClicked, type, isIdSelected,
  setIsClicked }) => {
  let buttonClass = 'inactive-button';
  if (idBlueSelected === id && type === 'blue') {
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
      <div className={`nLive-btn ${buttonClass}`} >
        <button type='button' className='nLive-side-btn' style={{height: !isFavorite && flag ? '22.875rem' : '15.1875rem', cursor: 'pointer'}} onClick={() => {
          setIsBlueDisplay((prev) => !prev);
          setCardId(id);
          isIdSelected(id);
          setIsClicked(true);
        }}>
          정보
        </button>
      </div>
    </div>
  );
};

export default AddButton;
