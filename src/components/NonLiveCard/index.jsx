/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import star from '../../assets/images/emptyStar/star-filled-gold.png';
import redShirt from '../../assets/image_42.png';
import blueShirt from '../../assets/image_40.png';
import CardHeader from './CardHeader';
import AddButton from './AddButton';

function NonLiveCard({
  id, name, flag, firstTeam, secondTeam, withPlus,idBlueSelected, setIdBlueSelected, index, nonLiveData, setNonLiveData
}) {
  const [showHeader, setShowHeader] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    flag ? setShowHeader(true) : setShowHeader(false);
  }, [flag]);
  const removeFromFavorite = ({ target }) => {
    const filteredData = nonLiveData.filter((el) => el.id !== +target.id)
    setNonLiveData(filteredData);
  }
  return (

    <div className='nLive-first-con' id={id} 
    >
      <div className='nLive-main-live'
        onClick={() => {
          setIdBlueSelected(id);
          setIsClicked(true);
      }}>
        <CardHeader
          id={id}
          show={showHeader}
          flag={flag}
          name={name}
          idBlueSelected={idBlueSelected}
        />
        <div className='nLive-card'>
          <div className='nLive-left'>
            <div className={`nLive-down-sec ${idBlueSelected === id ? 'active' : 'inactive'}`}>
              <div className='nLive-row'>
                <div style={{ background: 'transparent', border: 'none' }}  onClick={removeFromFavorite}>
                  <img className='nLive-star' id={id} src={star} alt='star' />
                </div>
                <div className='nLive-col'>
                  <div>
                    <div className='nLive-shirt'>
                      <img src={redShirt} alt='nLive-shirt' />
                      <span className='character'>H</span>
                      <p>{firstTeam}</p>
                    </div>
                    <div className='nLive-shirt'>
                      <img src={blueShirt} alt='shirt' />
                      <span className='character'>A</span>
                      <p>{secondTeam}</p>
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
      <AddButton id={id} index={index} idBlueSelected={idBlueSelected} nonLiveData={nonLiveData} setNonLiveData={setNonLiveData} isActive={isClicked} withPlus={withPlus} />
    </div>

  );
}

export default NonLiveCard;
