/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import playGold from '../../assets/images/play/play-gold.png';
import playTransparent from '../../assets/images/play/play-transperent.png';
import star from '../../assets/images/emptyStar/star-filled-gold.png';
import redShirt from '../../assets/images/shirt/red.png';
import blueShirt from '../../assets/images/shirt/blue.png';
import AddButton from './AddButton';
import CardHeader from './CardHeader';

function LiveCard({
  firstScore, secondScore, firstTeam, secondTeam, flag, name, isActive, addToCart, handleClick,
}) {
  const [showHeader, setShowHeader] = useState(false);
  const [value, setValue] = useState('23');
  // const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    flag ? setShowHeader(true) : setShowHeader(false);
    flag ? setValue(23) : setValue('15');
  }, []);

  const addToCartHandler = () => {
    addToCart();
    handleClick();
  };

  return (
    <div className='first-con'>
      <div className='main-live'>
        <CardHeader isActive={isActive} show={showHeader} flag={flag} name={name} />
        <div className='card'>
          <div className='left'>

            <div className={`down-sec ${isActive ? 'active' : 'inactive'}`}>

              <div className='row'>
                <button style={{ background: 'transparent', border: 'none' }} type='button' onClick={addToCartHandler}>
                  <img className='star' src={star} alt='star' />
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
                      -
                      {secondScore}
                    </p>
                    <p className='glowering'>후반전35</p>
                    <img src={isActive ? playGold : playTransparent} alt='play' />
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
      <AddButton isActive={isActive} value={value} />
    </div>
  );
}

export default LiveCard;
