import React from 'react';

export function Button1({ children, className, setValue }) {
  return (
    <button
      type='button'
      className={`cart-btn ${className}`}
      onClick={({ target: { textContent } }) => {
        if (textContent !== '최대') {
          setValue((prev) => {
            const newValue = prev?.replaceAll(',', '');
            const value = textContent?.replaceAll(',', '');
            const formattedValue = Number(
              Number(newValue) + Number(value)
            ).toLocaleString(undefined, {
              minimumFractionDigits: 0,
            });
            return formattedValue;
          })
        }
      }
      }
    >
      {children}
    </button>
  );
}

export function Button2({ children, className, setCart }) {
  return (
    <button
      type='button'
      onClick={() => className !== 'active' ? setCart([]) : null }
      className={`cart-btn-photo ${className}`}
    >
      {children}
    </button>
  );
}
