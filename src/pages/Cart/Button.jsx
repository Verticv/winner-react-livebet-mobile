import React from 'react';

export function Button1({ children, className }) {
  return (
    <button
      type='button'
      className={`cart-btn ${className}`}
    >
      {children}
    </button>
  );
}

export function Button2({ children, className }) {
  return (
    <button
      type='button'
      className={`cart-btn-photo ${className}`}
    >
      {children}
    </button>
  );
}
