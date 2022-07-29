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
  const [isStar, setIsStar] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const { favoriteCards, mainHeaderLive } = useSelector((state) => state.cards);
  useEffect(() => {
    flag ? setShowHeader(true) : setShowHeader(false);
    // flag ? setValue(23) : setValue('15');
  }, []);
  const toggleStar = (event) => {
    event.stopPropagation();
    setIsStar((prev) => !prev)
  };
  const addToCartHandler = () => {
    addToCart();
    handleClick();
  };
  const removeFromFavorite = ({ target }) => {
    const filteredData = data.filter((el) => el.id != target.id)
    setData(filteredData);
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
                  <button style={{ background: 'transparent', border: 'none', padding: '0', outline:'none' }}
                    onClick={isFavorite ? removeFromFavorite : toggleStar}>
                    {isFavorite
                      ? <img className='star' style={{outline:'none'}} id={id} src={star} alt='star' />
                      : <img className='star' style={{outline:'none'}} id={id} src={isStar ? star : nonActiveStar} alt='star' />
                    }
                  </button>
                  <div className='col'>
                    <div style={{ marginTop: '-0.9rem' }}>
                      <div className='shirt' style={{ marginTop: '0.25rem' }}>
                        <img src={redShirt} alt='shirt' />
                        <span className='character' style={{ marginTop: '0.28rem' }}>H</span>
                        <p>{firstTeam.length > 19 ? `${firstTeam.slice(0, 19)}...` : firstTeam}</p>
                      </div>
                      <div className='shirt'>
                        <img src={blueShirt} alt='shirt' />
                        <span className='character'>A</span>
                        <p>{secondTeam.length > 19 ? `${secondTeam.slice(0, 19)}...` : secondTeam}</p>
                      </div>
                    </div>
                    <div className='play-video'>
                      <p className='livee'>live</p>
                      <p className='score'>
                        {firstScore}
                        <span style={{ color: '#a0a0a0' }}>-</span>
                        {secondScore}
                      </p>
                      <p className='glowering' style={{ marginTop: '0.3rem' }}>후반전35</p>
                      <img onClick={(event) => event.stopPropagation()}
                        className='gold-play' src={(id === '00' || id === '01') && (type === 'red') ? playGold : playTransparent} alt='play' />
                    </div>
                  </div>
                </div>
                <div className='num-container'>
                  <div className='num-num'>
                    <div
                      style={{
                        display: "flex",
                        width: "18rem",
                        justifyContent: "space-between",
                        textAlign: "center",
                        marginRight: '1.1rem',
                        letterSpacing: '-0.09rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      <span style={{ marginRight: '0rem', marginLeft: '-0.8rem' }}>5</span>
                      <span>0</span>
                      <span style={{ marginLeft: '0rem' }}>0</span>
                      <span style={{ marginRight: '0rem' }}>0</span>
                      <span className='score'>{firstScore}</span>
                    </div>
                  </div>
                  <div className='num-num'>
                    <div
                      style={{
                        display: "flex",
                        width: "18rem",
                        justifyContent: "space-between",
                        textAlign: "center",
                        marginRight: '1.1rem',
                        letterSpacing: '-0.09rem',
                        marginTop: '0rem',
                      }}
                    >
                      <span style={{ marginRight: '0rem', marginLeft: '-0.8rem' }}>5</span>
                      <span>0</span>
                      <span style={{ marginLeft: '0rem' }}>0</span>
                      <span style={{ marginRight: '0rem' }}>0</span>
                      <span className='score'>{secondScore}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddButton
          id={id}
          changeOrder={changeOrder}
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
