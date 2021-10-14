import React from 'react';
import image from '../../assets/image1.png';
import background from '../../assets/line_22.png';

function LiveHeader() {
  return (
    <div className='second-con'>
      <p className='live'>
        Live
      </p>
      <p className='live-p'>
        실시간 라이브경기
      </p>
      <p className='live'>
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
  );
}

export default LiveHeader;
