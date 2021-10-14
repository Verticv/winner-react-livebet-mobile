import React from 'react';

export function Button1({ children }) {
  return (
    <button
      type='button'
      style={{
        color: 'gold', borderRadius: '5px', height: '30px', minWidth: '110px',
      }}
    >
      {children}
    </button>
  );
}

export function Button2({ children }) {
  return (
    <button
      type='button'
      style={{
        display: 'flex', flexDirection: 'row', minWidth: '150px', height: '40px', borderRadius: '5px',
      }}
    >
      {children}
    </button>
  );
}
