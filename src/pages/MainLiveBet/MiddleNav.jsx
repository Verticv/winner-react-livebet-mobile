import React from 'react';
import { isIOS } from 'react-device-detect';

function MiddleNav({ idActive, setIdActive }) {
  const nav = [{
    id: 0,
    name: '전체',
  }, {
    id: 1,
    name: '승무패핸디캡',
  }, {
    id: 2,
    name: '오버언더',
  }, {
    id: 3,
    name: '핸디캡',
  }, {
    id: 4,
    name: '팀골',
  }];

  return (
    <div className='middle-nav'>
      {nav.map(({ id, name }) => (
        <button id={id}
          key={id}
          type='button'
          onClick={(e) => setIdActive(e.target.id)}
          className={+idActive === id ? 'active' : ''}
          style={{ letterSpacing: isIOS ? '-0.2rem' : '' }}
          >
          {name}
        </button>
      ))
      }
    </div >
  );
}

export default MiddleNav;
