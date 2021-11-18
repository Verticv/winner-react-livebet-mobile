/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import star from '../../assets/images/emptyStar/star-filled-whitepng.png';
import redShirt from '../../assets/image_42.png';
import blueShirt from '../../assets/image_40.png';
import CardHeader from './CardHeader';
import AddButton from './AddButton';

function NonLiveCard({
  name, flag, firstTeam, secondTeam,
}) {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    flag ? setShowHeader(true) : setShowHeader(false);
  }, []);
  return (

    <div className='nLive-first-con'>
      <div className='nLive-main-live'>
        <CardHeader show={showHeader} flag={flag} name={name} />
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
      <AddButton />
    </div>

  );
}

export default NonLiveCard;
