import React from 'react';
import playButton from '../../assets/play_button.png';
import star from '../../assets/image_63.png';
import redShirt from '../../assets/image_42.png';
import blueShirt from '../../assets/image_40.png';
import a from '../../assets/a.png';

import './style.css';

function LiveCard({
  firstScore, secondScore, firstName, secondName,
}) {
  return (
    <div className='card'>
      <div className='left'>

        <div className='down-sec'>

          <div className='row'>
            <div>
              <img className='star' src={star} alt='star' />
            </div>
            <div className='col'>
              <div>
                <div className='shirt'>
                  <img src={redShirt} alt='shirt' />
                  <img src={a} alt='H' />
                  <p>{firstName}</p>
                </div>

                <div className='shirt'>
                  <img src={blueShirt} alt='shirt' />
                  <img src={a} alt='A' />
                  <p>{secondName}</p>
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
  );
}

export default LiveCard;
