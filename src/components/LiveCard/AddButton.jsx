import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = ({ value }) => (
  <Link to='/liveBet' className='section-num'>
    <button type='button' className='live-btn'>
      <p>+</p>
      <p>{value}</p>
    </button>
  </Link>
);

export default AddButton;
