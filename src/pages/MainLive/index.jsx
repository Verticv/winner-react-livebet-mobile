import React from 'react';
import Modal from '../../components/Modal';
import useModal from '../../hooks/useModal';
import NavBar from '../../components/NavBar';
import LiveCard from '../../components/LiveCard';
import Footer from '../../components/Footer';
import photo from '../../assets/img.png';
import image from '../../assets/image1.png';
import background from '../../assets/line_22.png';
import flag from '../../assets/flag1.png';
import NonLiveCard from '../../components/NonLiveCard';

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
        <div className='second-con'>
          <p className='live'>
            Live
          </p>
          <p className='live-p'>
            실시간 라이브경기
          </p>
          <p className='live'>
            80
          </p>
          <img
            style={{
              backgroundImage: { background },
              backgroundRepeat: 'repeat',
            }}
            src={image}
            alt='dropdown'
          />
        </div>

        <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstName='라이브경' secondName='라이브' />
        <LiveCard name='라이브경기' firstScore='9' secondScore='1' firstName='라이브경' secondName='라이브' />
        <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstName='라이브경' secondName='라이브' />

        <NonLiveCard />
        <NonLiveCard />
      </div>

      <Footer />
    </>

  );
};

export default MainLive;
