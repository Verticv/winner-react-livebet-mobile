/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import playButton from '../../assets/play_button.png';
import star from '../../assets/image_63.png';
import redShirt from '../../assets/image_42.png';
import blueShirt from '../../assets/image_40.png';
import a from '../../assets/a.png';
import AddButton from './AddButton';
import CardHeader from './CardHeader';

import './style.css';

function LiveCard({
  firstScore, secondScore, firstTeam, secondTeam, flag, name, addToCart, handleClick,
}) {
  const [showHeader, setShowHeader] = useState(false);
  const [value, setValue] = useState('23');
  const [isClicked, setIsClicked] = useState(false);

  const click = () => {
    console.log('hi');
  };
  useEffect(() => {
    flag ? setShowHeader(true) : setShowHeader(false);
    flag ? setValue(23) : setValue('15');
  }, []);

  return (
    <div className='first-con'>
      <div className='main-live'>
        <CardHeader show={showHeader} flag={flag} name={name} />
        <div className='card'>
          <div className='left'>

            <div className='down-sec'>

              <div className='row'>
                <button type='button' onClick={handleClick}>
                  <img className='star' src={star} alt='star' />
                </button>
                <div className='col'>
                  <div>
                    <div className='shirt'>
                      <img src={redShirt} alt='shirt' />
                      <img src={a} alt='H' />
                      <p>{firstTeam}</p>
                    </div>

                    <div className='shirt'>
                      <img src={blueShirt} alt='shirt' />
                      <img src={a} alt='A' />
                      <p>{secondTeam}</p>
                    </div>

                  </div>
                  <div className='play-video'>
                    <p className='livee'>live</p>
                    <p>
                      {firstScore}
                      -
                      {secondScore}
                    </p>
                    <p>예상배예</p>
                    <img src={playButton} alt='play' />
                  </div>

                </div>

              </div>

              <div className='num-container'>
                <div className='num-num'>
                  <p>5 0 0 0 </p>
                  <p className='score'>{firstScore}</p>

                </div>

                <div className='num-num'>
                  <p>5 0 0 0 </p>
                  <p className='score'>{secondScore}</p>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <AddButton value={value} />
    </div>
  );
}

export default LiveCard;
