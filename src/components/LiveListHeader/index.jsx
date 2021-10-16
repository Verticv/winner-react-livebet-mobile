import React from 'react';
import image from '../../assets/image1.png';
import './style.css';

const LiveListHeader = () => (
  <>
    <div className='live-header-wrapper'>
      <div className='live-Head-container'>
        <p className='live-header'>
          Live
        </p>
        <p className='live-header-para'>
          실시간 라이브경기
        </p>
        <p className='live-header width'>
          80
        </p>
        <img
          className='live-header-img'
          src={image}
          alt='dropdown'
        />

      </div>

    </div>
  </>
);

export default LiveListHeader;
