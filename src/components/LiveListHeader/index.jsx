import React from 'react';

const LiveListHeader = ({ setIsChangeRedOrder }) => (
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
        <div className='arrow-wrapper'
        // onClick={() => { setIsChangeRedOrder((prev) => !prev);}}
        />
      </div>

    </div>
  </>
);

export default LiveListHeader;
