import React from 'react';
import LiveCard from '../../components/LiveCard';
import LiveListHeader from '../../components/LiveListHeader';
import MainHeader from '../../components/MainHeader';
import NavBar from '../../components/NavBar';
import flag from '../../assets/flag1.png';
import Footer from '../../components/Footer';

const MainLiveList = () => (
  <>
    <NavBar />
    <MainHeader />
    <LiveListHeader />
    <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />
    <LiveCard name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />
    <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />
    <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />
    <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />
    <Footer />
  </>

);

export default MainLiveList;
