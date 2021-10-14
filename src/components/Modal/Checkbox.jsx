/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Checkbox = ({
  id, type, name, handleClick, isChecked, icon,
}) => (
  <div className='checkbox'>
    <label htmlFor={id}>
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleClick}
        checked={isChecked}
      />
      <img src={icon} className='icon' />
      {name}

    </label>
  </div>

);
export default Checkbox;
