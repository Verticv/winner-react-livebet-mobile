import React from 'react';
import Modal from '../../components/Modal';
import useModal from '../../hooks/useModal';
import NavBar from '../../components/NavBar';
import LiveCard from '../../components/LiveCard';
import Footer from '../../components/Footer';
import photo from '../../assets/img.png';

import CardHeader from '../../components/LiveCard/CardHeader';
import flag from '../../assets/flag1.png';
import AddButton from '../../components/LiveCard/AddButton';
import NonLiveCard from '../../components/NonLiveCard';
import LiveHeader from '../../components/LiveHeader';

import './style.css';

const MainLive = () => {
  const { toggle, visible } = useModal();

  return (

    <>
      <NavBar />

      <div className='container1'>
        <div className='right'>
          <span className='dot' />
          <p>브경</p>
          <p className='head-p'>
            80
          </p>
        </div>
        <div className='button-container'>
          <button type='submit' className='btn' onClick={toggle}>
            <div className='button-pho'>
              <img src={photo} alt='' />
              <p>선택경기</p>
            </div>

          </button>
          <button type='submit' className='btn'>선택경기</button>
        </div>
      </div>
      <Modal visible={visible} toggle={toggle} />

      <div className='back'>
        <LiveHeader />
        <div className='first-con'>
          <div className='main-live'>
            <CardHeader flag={flag} name='예상배' />
            <LiveCard firstScore={4} secondScore={5} firstName='예상배예' secondName='예상배예예상' />
          </div>
          <AddButton />
        </div>

        <div className='first-con'>
          <div className='main-live'>
            <CardHeader flag={flag} name='예상배' />
            <LiveCard firstScore={9} secondScore={2} firstName='예상배예예상' secondName='예상배예예상' />
          </div>
          <AddButton />
        </div>
        <br />
        <NonLiveCard />
        <NonLiveCard />

      </div>

      <Footer />
    </>

  );
};

export default MainLive;
