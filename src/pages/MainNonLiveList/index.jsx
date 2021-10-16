import React from 'react';
import NonLiveCard from '../../components/NonLiveCard';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import MainHeader from '../../components/MainHeader';
import NavBar from '../../components/NavBar';
import flag from '../../assets/flag1.png';
import Footer from '../../components/Footer';

const MainNonLiveList = () => (
  <>
    <NavBar />
    <MainHeader />
    <NonLiveListHeader />
    <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경' secondTeam='라브경브경이브' />
    <NonLiveCard name='라이브경기' firstTeam='라이브경브경' secondTeam='라이브' />
    <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경' secondTeam='라브경브경이브' />
    <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경' secondTeam='라브경브경이브' />
    <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경' secondTeam='라브경브경이브' />

    <Footer />
  </>

);

export default MainNonLiveList;
