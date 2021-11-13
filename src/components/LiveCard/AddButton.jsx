import React from 'react';
import { Link } from 'react-router-dom';
import activePlus from '../../assets/images/plus/plus-acive.png';
import inactivePlus from '../../assets/images/plus/plus-inacive.png';

const AddButton = ({ value, isActive }) => (
  <Link to='/liveBet' className='section-num'>
    <button type='button' className={`live-btn ${isActive ? 'active-button' : 'inactive-button'}`}>
      <img src={isActive ? activePlus : inactivePlus} alt='' />
      <p>{value}</p>
    </button>
  </Link>
);

export default AddButton;
