import React from 'react';

function Slide({ name, number }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5px 0 5px', border: '1px solid ThreeDDarkShadow', height: '40px',
    }}
    >
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
}

export default Slide;
