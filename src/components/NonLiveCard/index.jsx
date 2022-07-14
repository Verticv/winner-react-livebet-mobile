/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import star from '../../assets/images/emptyStar/star-filled-gold.png';
import redShirt from '../../assets/images/shirt/red.png';
import blueShirt from '../../assets/images/shirt/blue.png';
import CardHeader from './CardHeader';
import AddButton from './AddButton';
import nonActiveStar from '../../assets/images/imgs/non-active-star.png';
import MainNonLiveBet from '../../pages/MainNonLiveBet';
function NonLiveCard({
  id, name, flag, firstTeam, secondTeam, withPlus,
  // idBlueSelected, setIdBlueSelected,
  idSelect, isIdSelected, index, nonLiveData, setNonLiveData, isFavorite, cardId, setCardId,
  isClicked, setIsClicked, type
}) {
  const [showHeader, setShowHeader] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  const [isStar, setIsStar] = useState(false);
  const [isBlueDisplay, setIsBlueDisplay] = useState(false);
  useEffect(() => {
    flag ? setShowHeader(true) : setShowHeader(false);
  }, [flag]);
  const removeFromFavorite = ({ target }) => {
    const filteredData = nonLiveData.filter((el) => el.id !== +target.id)
    setNonLiveData(filteredData);
  }
  const toggleStar = () => setIsStar((prev) => !prev);
  return (
    <>
      <div className='nLive-first-con' id={id}>
        <div className='nLive-main-live' onClick={() => {
          isIdSelected(id);
          setIsClicked(true);
        }}>
          <CardHeader
            id={id}
            show={showHeader}
            flag={flag}
            name={name}
            idBlueSelected={idSelect}
            isClicked={isClicked}
            type={type}
          />
          <div className='nLive-card'>
            <div className='nLive-left'>
              <div className={`nLive-down-sec ${(type === 'blue') && (idSelect === id) ? 'active' : 'inactive'}`}>
                <div className='nLive-row'>
                  <button style={{ background: 'transparent', border: 'none', padding: '0' }}
                    onClick={isFavorite ? removeFromFavorite : toggleStar}>
                    {isFavorite
                      ? <img className='nLive-star' id={id} src={star} alt='star' />
                      : <img className='nLive-star' id={id} src={isStar ? star : nonActiveStar} alt='star' />}
                  </button>
                  <div className='nLive-col'>
                    <div style={{ marginTop: '-0.9rem' }}>
                      <div className='nLive-shirt'>
                        <img src={redShirt} alt='nLive-shirt' />
                        <span className='character'>H</span>
                        <p>{firstTeam.length > 19 ? `${firstTeam.slice(0, 19)}...` : firstTeam}</p>
                      </div>
                      <div className='nLive-shirt'>
                        <img src={blueShirt} alt='shirt' />
                        <span className='character'>A</span>
                        <p>{secondTeam.length > 19 ? `${secondTeam.slice(0, 19)}...` : secondTeam}</p>
                        {/* <p>{secondTeam}</p> */}
                      </div>
                    </div>
                    <div className='nLive-play-video'>
                      <p>02-13 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddButton
          id={id}
          index={index}
          flag={flag}
          isFavorite={isFavorite}
          idBlueSelected={idSelect}
          nonLiveData={nonLiveData}
          setNonLiveData={setNonLiveData}
          isActive={isClicked}
          withPlus={withPlus}
          isBlueDisplay={isBlueDisplay}
          setIsBlueDisplay={setIsBlueDisplay}
          setCardId={setCardId}
          cardId={cardId}
          isClicked={isClicked}
          type={type}
          isIdSelected={isIdSelected}
          setIsClicked={setIsClicked}
        />
      </div>
      {(cardId === id) && isBlueDisplay ? <MainNonLiveBet /> : null}
    </>
  );
}

export default NonLiveCard;
