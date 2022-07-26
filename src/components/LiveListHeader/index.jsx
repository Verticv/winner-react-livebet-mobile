import React from 'react';
import { isIOS } from 'react-device-detect';

const LiveListHeader = ({ setIsChangeRedOrder }) => (
  <>
    <div className='live-header-wrapper'>
      <div className='live-Head-container'>
        <p className='live-header'>
          Live
        </p>
        <p className='live-header-para' style={{ letterSpacing: isIOS ? '-0.2rem' : '' }}>
          실시간 라이브경기
        </p>
        <p className='live-header width'>
          4
        </p>
        <div className='arrow-wrapper'
        // onClick={() => { setIsChangeRedOrder((prev) => !prev);}}
        />
      </div>

    </div>
  </>
);

export default LiveListHeader;
