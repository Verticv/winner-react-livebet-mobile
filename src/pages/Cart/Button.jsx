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
  // const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [scroll]);

  return (
    <button
      type='button'
      onClick={() => {
        if (className !== 'active') {
          setCart([]);
          // setScroll((prev) => !prev);
        }
      } }
      className={`cart-btn-photo ${className}`}
    >
      {children}
    </button>
  );
}
