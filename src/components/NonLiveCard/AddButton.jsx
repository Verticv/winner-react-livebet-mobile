import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => (
  <Link className='nLive-btn' to='/nonLiveBet'>
    <button type='button' className='nLive-side-btn'>
      정보
    </button>
  </Link>

);

export default AddButton;
