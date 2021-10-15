import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => (
  <Link to='/liveBet' className='section-num'>
    <button type='button' className='live-btn'>
      <p>+</p>
      <p>23</p>
    </button>
  </Link>
);

export default AddButton;
