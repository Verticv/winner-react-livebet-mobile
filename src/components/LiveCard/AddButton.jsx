import React from 'react';
import activePlus from '../../assets/images/plus/plus-acive.png';
import inactivePlus from '../../assets/images/plus/plus-inacive.png';
import redArrow from '../../assets/images/imgs/red-arrow.png';
import redArrowActive from '../../assets/images/imgs/ico-red-active.png';

const AddButton = ({ value, isActive, withPlus, idSelect, isDisplay, mainHeaderLive, id, favoriteCards, setData, data, index, isFavorite, flag, cardId, setCardId, cardData, setCardData, addToCart, handleClick, setIsDisplay }) => {
  let buttonClass = 'inactive-button inactive-with-plus';
  if (id === idSelect) {
    if (isActive && withPlus) {
      buttonClass = 'active-button active-with-plus card-button-arrow-active';
    } else if (!isActive && withPlus) {
      buttonClass = 'inactive-button inactive-with-plus';
    } else if (isActive) {
      buttonClass = 'active-button';
    }
  }
  const changeOrder = (e) => {
    let temp;
    const newCard = [...data];
    if (+e.target.id !== 0) {
      temp = newCard[e.target.id - 1];
      newCard[e.target.id - 1] = newCard[e.target.id];
      newCard[e.target.id] = temp;
    }
    setData(newCard);
  }
  return (
    <div style={{ display: 'block' }}>
      <div>
        {isFavorite
          ? <button type='button' id={index} className={`card-button-arrow live-btn ${buttonClass}`}
            onClick={changeOrder}>
            <img style={{ width: '2.625rem', height: '1.625rem' }} id={index} onClick={changeOrder} src={isActive && idSelect === id ? redArrowActive : redArrow} alt='' />
          </button>
          : null}

        <div className='section-num' id={id}>
          <button type='button' id={id} onClick={() => {
            setCardId(id);
            setIsDisplay(!isDisplay);
          }} className={`live-btn ${buttonClass}`} style={{ height: !isFavorite && flag ? '21.6rem' : '14.6rem' }}>
            <img id={id} src={isActive && idSelect === id ? activePlus : inactivePlus} alt='' />
            <p>{value}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddButton;
