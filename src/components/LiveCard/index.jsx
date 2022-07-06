/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import playGold from '../../assets/images/play/play-gold.png';
import playTransparent from '../../assets/images/play/play-transperent.png';
import star from '../../assets/images/emptyStar/star-filled-gold.png';
import redShirt from '../../assets/images/shirt/red.png';
import blueShirt from '../../assets/images/shirt/blue.png';
import AddButton from './AddButton';
import CardHeader from './CardHeader';
import nonActiveStar from '../../assets/images/imgs/non-active-star.png';
import LiveBet from '../../pages/MainLiveBet';

function LiveCard({
  firstScore, secondScore, firstTeam, secondTeam, flag, name, removeCard, cardId, setCardId, cardData, setCardData,
  isActive, withPlus, addToCart, handleClick, id, idSelect, isIdSelected, setData, data, index, isFavorite, isClicked, setIsClicked,
  type
}) {
  const [showHeader, setShowHeader] = useState(false);
  const [value, setValue] = useState('23');
  // const [isClicked, setIsClicked] = useState(false);
  const [isStar, setIsStar] = useState(true);
  const [isDisplay, setIsDisplay] = useState(false);
  const { favoriteCards, mainHeaderLive } = useSelector((state) => state.cards);
  useEffect(() => {
    flag ? setShowHeader(true) : setShowHeader(false);
    flag ? setValue(23) : setValue('15');
  }, []);
  const toggleStar = () => setIsStar((prev) => !prev);
  const addToCartHandler = () => {
    addToCart();
    handleClick();
  };
  const removeFromFavorite = ({ target }) => {
    const filteredData = data.filter((el) => el.id != target.id)
    setData(filteredData);
  }
  return (
    <>
    <div className='first-con' id={id}>
      <div className='main-live' onClick={() => {
      isIdSelected(id);
      setIsClicked(true);
    }}>
        <CardHeader
          id={id}
          isActive={isClicked}
          setIsClicked={setIsClicked}
          show={showHeader}
          flag={flag}
          name={name}
          idSelect={idSelect}
          isIdSelected={isIdSelected}
        />
        <div className='card'>
          <div className='left'>
            <div className={`down-sec ${idSelect === id && type === 'red' ? 'active' : 'inactive'}`}>
              <div className='row'>
                <button style={{ background: 'transparent', border: 'none', padding: '0' }} type='button'
                  onClick={isFavorite ? removeFromFavorite : toggleStar}
                >
                  <img className='star' id={id} src={isStar ? star : nonActiveStar} alt='star' />
                </button>
                <div className='col'>
                  <div>
                    <div className='shirt'>
                      <img src={redShirt} alt='shirt' />
                      <span className='character'>H</span>
                      <p>{firstTeam}</p>
                    </div>
                    <div className='shirt'>
                      <img src={blueShirt} alt='shirt' />
                      <span className='character'>A</span>
                      <p>{secondTeam}</p>
                    </div>
                  </div>
                  <div className='play-video'>
                    <p className='livee'>live</p>
                    <p className='score'>
                      {firstScore}
                      <span style={{ color: '#858585' }}>-</span>
                      {secondScore}
                    </p>
                    <p className='glowering'>후반전35</p>
                    <img src={(id === '00' || id === '01') && (type === 'red') ? playGold : playTransparent} alt='play' />
                  </div>
                </div>
              </div>
              <div className='num-container'>
                <div className='num-num'>
                  <span>5</span>
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                  <p className='score'>{firstScore}</p>
                </div>
                <div className='num-num'>
                  <span>5</span>
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                  <p className='score'>{secondScore}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddButton
        id={id}
        addToCart={addToCart}
        handleClick={handleClick}
        setCardId={setCardId}
        mainHeaderLive={mainHeaderLive}
        cardData={cardData}
        setCardData={setCardData}
        index={index}
        flag={flag}
        isFavorite={isFavorite}
        idSelect={idSelect}
        isIdSelected={isIdSelected}
        removeCard={removeCard}
        data={data}
        setData={setData}
        favoriteCards={favoriteCards}
        setIsClicked={setIsClicked}
        isActive={isClicked}
        withPlus={withPlus}
        value={value}
        cardId={cardId}
        setIsDisplay={setIsDisplay}
        isDisplay={isDisplay}
        isClicked={isClicked}
        type={type}
      />
    </div>
      {(cardId == id) && isDisplay
        ? <LiveBet cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        : null
      }
    </>
  );
}

export default LiveCard;
