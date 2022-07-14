import React from 'react';
import activePlus from '../../assets/images/plus/plus-acive.png';
import inactivePlus from '../../assets/images/plus/plus-inacive.png';
import redArrow from '../../assets/images/imgs/red-arrow.png';
import redArrowActive from '../../assets/images/imgs/ico-red-active.png';

const AddButton = ({ value, isActive, withPlus, idSelect, isDisplay, changeOrder, mainHeaderLive, id, favoriteCards, setData, data, index, isFavorite, flag, cardId, setCardId, cardData, setCardData, addToCart, handleClick, setIsDisplay, isClicked, type, setIsClicked, isIdSelected }) => {
  let buttonClass = 'inactive-button inactive-with-plus';
  if (id === idSelect && type === 'red') {
    if (isActive && withPlus) {
      buttonClass = 'active-button active-with-plus card-button-arrow-active';
    } else if (!isActive && withPlus) {
      buttonClass = 'inactive-button inactive-with-plus';
    } else if (isActive) {
      buttonClass = 'active-button';
    }
  }
  return (
    <div style={{ display: 'block' }}>
      <div className={`${id ===idSelect ? 'active-active' : ''}`}>
        {isFavorite
          ? <button type='button' id={index} className={`card-button-arrow live-btn ${buttonClass}`}
            onClick={changeOrder}>
            <img style={{ width: '2.625rem', height: '1.625rem' }} id={index} onClick={changeOrder} src={type === 'red' && idSelect === id ? redArrowActive : redArrow} alt='' />
          </button>
          : null}

        <div className={`section-num ${id === idSelect ? 'activee' : ''}`}  id={id}>
          <button type='button' id={id} onClick={() => {
            setCardId(id);
            setIsDisplay(!isDisplay);
            isIdSelected(id);
            setIsClicked(true);
          }} className={`live-btn ${buttonClass}`} style={{ height: !isFavorite && flag ? '22.85rem' : '15.1875rem' }}>
            <img id={id} src={idSelect === id ? activePlus : inactivePlus} alt='' />
            <p>{value}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddButton;
