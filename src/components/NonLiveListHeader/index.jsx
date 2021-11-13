import React from 'react';
import image from '../../assets/image1.png';

const NonLiveListHeader = () => (
  <>
    <div className='nonLive-header-wrapper'>
      <div className='nonLive-head-container'>
        <p className='nonLive-header'>
          NONLIVE
        </p>
        <p className='nonLive-header-para'>
          실시이브경기
        </p>
        <p className='nonLive-header width'>
          80
        </p>
        <div className='arrow-wrapper'>
          <img
            className='nonLive-header-img'
            src={image}
            alt='dropdown'
          />
        </div>

      </div>
    </div>
  </>

);

export default NonLiveListHeader;
