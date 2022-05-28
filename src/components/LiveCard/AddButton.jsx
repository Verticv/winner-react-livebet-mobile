import React from 'react';
import { Link } from 'react-router-dom';
import activePlus from '../../assets/images/plus/plus-acive.png';
import inactivePlus from '../../assets/images/plus/plus-inacive.png';
import redArrow from '../../assets/images/imgs/red-arrow.png';
import redArrowActive from '../../assets/images/imgs/ico-red-active.png'; 

const AddButton = ({ value, isActive, withPlus, idSelect, setIsClicked, id, favoriteCards, setData, data, index }) => {
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
    if(+e.target.id !== 0){
      temp = newCard[e.target.id - 1];
      newCard[e.target.id - 1] = newCard[e.target.id];
      newCard[e.target.id] = temp;
    } 
    setData(newCard);
  }
  return (
    <div>
      <button type='button' id={index} className={`card-button-arrow live-btn ${buttonClass}`}
      onClick={changeOrder}>
        <img style={{width:'2.625rem', height:'1.625rem' }} id={index} onClick={changeOrder} src={ isActive && idSelect === id ? redArrowActive : redArrow} alt=''/>
      </button>
      <Link to='/liveBet' className='section-num'>
        <button type='button' className={`live-btn ${buttonClass}`}>
          <img src={isActive && idSelect === id ? activePlus : inactivePlus} alt='' />
          <p>{value}</p>
        </button>
      </Link>
    </div>
  );
};

export default AddButton;
