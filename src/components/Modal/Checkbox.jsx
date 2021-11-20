/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Checkbox = ({
  id, type, name, handleClick, isChecked, icon,
}) => (
  <div className='checkbox'>
    <label htmlFor={id}>
      <div className='input-wrapper'>
        <input
          id={id}
          name={name}
          type={type}
          onChange={handleClick}
          checked={isChecked}
        />
      </div>

      <div className='image-wrapper'>
        <img src={icon} className='icon' />
        <span className='checkbox-text'>{name}</span>
      </div>

    </label>
  </div>

);
export default Checkbox;
