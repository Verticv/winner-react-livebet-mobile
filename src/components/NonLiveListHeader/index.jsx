import React from 'react';
import image from '../../assets/image1.png';
import './style.css';

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
        <img
          className='nonLive-header-img'
          src={image}
          alt='dropdown'
        />

      </div>

    </div>
  </>

);

export default NonLiveListHeader;
