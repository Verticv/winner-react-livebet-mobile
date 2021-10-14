import React from 'react';
import './style.css';

export function Button1({ children }) {
  return (
    <button
      type='button'
      className='cart-btn'
    >
      {children}
    </button>
  );
}

export function Button2({ children }) {
  return (
    <button
      type='button'
      className='cart-btn-photo'
    >
      {children}
    </button>
  );
}
