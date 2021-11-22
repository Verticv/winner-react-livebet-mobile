import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = ({ isActive }) => (
  <Link className={`nLive-btn ${isActive && 'active-button'}`} to='/nonLiveBet'>
    <button type='button' className='nLive-side-btn'>
      정보
    </button>
  </Link>

);

export default AddButton;
