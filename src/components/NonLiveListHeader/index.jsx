import React from 'react';

const NonLiveListHeader = ({ setIsChangeBlueOrder }) => (
  <>
    <div className='nonLive-header-wrapper'>
      <div className='nonLive-head-container'>
        <p className='nonLive-header'>
          NONLIVE
        </p>
        <p className='nonLive-header-para'>
          예정경기
        </p>
        <p className='nonLive-header width'>
          20
        </p>
        <div className='arrow-wrapper'
          // onClick={() => setIsChangeBlueOrder((prev) => !prev)}
        />

      </div>
    </div>
  </>

);

export default NonLiveListHeader;
