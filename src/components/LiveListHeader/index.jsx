import React from 'react';
import image from '../../assets/image1.png';
import background from '../../assets/line_22.png';
import './style.css';

const LiveListHeader = () => (
  <>
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
        style={{
          backgroundImage: { background },
          backgroundRepeat: 'repeat',
        }}
        src={image}
        alt='dropdown'
      />
    </div>
  </>
);

export default LiveListHeader;
