/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import star from '../../assets/image_63.png';
import redShirt from '../../assets/image_42.png';
import blueShirt from '../../assets/image_40.png';
import a from '../../assets/a.png';
import flag from '../../assets/flag1.png';
import CardHeader from './CardHeader';
import AddButton from './AddButton';

function NonLiveCard() {
  return (

    <div className='nLive-first-con'>
      <div className='nLive-main-live'>
        <CardHeader flag={flag} name='예상배' />
        <div className='nLive-card'>
          <div className='nLive-left'>

            <div className='nLive-down-sec'>

              <div className='nLive-row'>
                <div>
                  <img className='nLive-star' src={star} alt='star' />
                </div>
                <div className='nLive-col'>
                  <div>
                    <div className='nLive-shirt'>
                      <img src={redShirt} alt='nLive-shirt' />
                      <img src={a} alt='H' />
                      <p>cccc</p>
                    </div>

                    <div className='nLive-shirt'>
                      <img src={blueShirt} alt='shirt' />
                      <img src={a} alt='A' />
                      <p>aaa</p>
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
      <AddButton />
    </div>

  );
}

export default NonLiveCard;
