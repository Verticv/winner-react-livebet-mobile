import React, { useState } from 'react';
import MidSecBtn from './MidSecBtn';

function DropDown() {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>홈팀 오버언더</p>
        <button type='button' onClick={handleIsClick}>C</button>
      </div>
      {isClicked ? (
        <>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
          >
            <MidSecBtn />
            <button type='button'>4.05</button>
            <MidSecBtn />
          </div>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
          >
            <MidSecBtn />
            <button type='button'>4.05</button>
            <MidSecBtn />
          </div>

        </>
      ) : null}

    </div>
  );
}

export default DropDown;
