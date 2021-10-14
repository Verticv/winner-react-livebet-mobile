import React from 'react';
import playButton from '../../assets/play_button.png';
import star from '../../assets/image_63.png';
import redShirt from '../../assets/image_42.png';
import blueShirt from '../../assets/image_40.png';
import a from '../../assets/a.png';
import flag from '../../assets/flag1.png';
import CardHeader from './CardHeader';
import AddButton from './AddButton';

function NonLiveCard() {
  return (

    <div className='first-con'>
      <div className='main-live'>
        <CardHeader flag={flag} name='예상배' />
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
                      <p>cccc</p>
                    </div>

                    <div className='shirt'>
                      <img src={blueShirt} alt='shirt' />
                      <img src={a} alt='A' />
                      <p>aaa</p>
                    </div>

                  </div>
                  <div className='play-video'>

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
