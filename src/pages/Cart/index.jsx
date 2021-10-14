import React from 'react';
import cart from '../../assets/cart.png';
import Slide from './Slide';
import { Button1, Button2 } from './Button';

const Cart = () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={cart} alt='cart' />
      <p>BETSLIP</p>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px', color: 'white', backgroundColor: 'red', borderRadius: '10px',
      }}
      >
        2
      </div>
    </div>
    <div style={{
      backgroundColor: 'ThreeDDarkShadow', color: 'white', minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      실시간 라이브경기실시간
    </div>

    <Slide name='실시간' number='3,000,000' />
    <Slide name='라이브경기' number='5000' />
    <Slide name='라이브경기' number='1,000,000' />
    <Slide name='라이브경기' number='2,000,000' />
    <Slide name='라이브경기' number='0.00' />
    <Slide name='라이브경기' number='0.00' />
    <Slide name='라이브경기' number='0' />
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px',
    }}
    >
      <p>이기실시간</p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '10px',
        width: '50%',
        height: '80%',
        backgroundColor: 'black',
        alignItems: 'center',
      }}
      >
        <img src={cart} alt='' />
        <p style={{ color: 'white', marginRight: '5px' }}>0</p>
      </div>
    </div>
    <div style={{ backgroundColor: 'gray' }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '10px 0',
      }}
      >
        <Button1>5000</Button1>
        <Button1>5000</Button1>
        <Button1>5000</Button1>
        <Button1>5000</Button1>
        <Button1>5000</Button1>
        <Button1>5000</Button1>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px 0', border: '1px solid black',
      }}
      >
        <Button2>
          <img src={cart} alt='' />
          <p>이기실시간</p>
        </Button2>
        <Button2>
          <img src={cart} alt='' />
          <p>이기실시간</p>
        </Button2>
      </div>
    </div>
    <div style={{
      marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black',
    }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
        <img src={cart} alt='' />
        <p style={{ marginLeft: '15px' }}>이기실</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        width: '80px',
        height: '40px',
        backgroundColor: 'goldenrod',
        borderRadius: '5px',
      }}
      >
        <p style={{ color: 'white', marginRight: '5px' }}>0</p>
        <img src={cart} alt='' />
      </div>
    </div>
    <div style={{
      backgroundColor: 'ThreeDDarkShadow', color: 'white', minHeight: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      실시간 라이브경기실시간
    </div>
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px',
    }}
    >
      <button
        type='button'
        style={{
          backgroundColor: 'goldenrod',
          borderRadius: '5px',
          height: '80%',
          width: '95%',
        }}
      >
        라이브경기실시간
      </button>
    </div>

  </div>
);

export default Cart;
