import React from 'react';
import NavBar from '../../components/NavBar';
import LiveCard from '../../components/LiveCard';
import Footer from '../../components/Footer';
import flag from '../../assets/flag1.png';
import NonLiveCard from '../../components/NonLiveCard';

import './style.css';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import MainHeader from '../../components/MainHeader';

const MainLive = ({ fav, setFav, handleFav }) => (
  <>
    <NavBar />

    <div className='back'>
      <MainHeader />

      <LiveListHeader />

      <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' handleFav={handleFav} />
      <LiveCard name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />
      <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />

      <NonLiveListHeader />

      <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경' secondTeam='라브경브경이브' />
      <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경브경' secondTeam='라이브' />
    </div>

    <Footer />
  </>
);

export default MainLive;
