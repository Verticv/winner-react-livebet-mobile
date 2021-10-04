import React from 'react';

import './style.css';

function LiveCard() {
  return (
    <div className="card">
      <div className='left'>
        <div style={{border: '1px solid red'}}>Upper Section</div>
        <div style={{border: '1px solid blue'}}>Down Section</div>
      </div>
      <button>
        <p>+</p>
        <p>23</p>
      </button>
    </div>
  )
}

export default LiveCard
