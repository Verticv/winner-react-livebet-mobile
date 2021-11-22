import React from 'react';
import LiveCard from '../../components/LiveCard';
import LiveListHeader from '../../components/LiveListHeader';
import MainHeader from '../../components/MainHeader';
import NavBar from '../../components/NavBar';
import spain from '../../assets/images/flags/spain.png';
import germany from '../../assets/images/flags/germany.png';
import england from '../../assets/images/flags/england.png';
import Footer from '../../components/Footer';

const MainLiveList = () => (
  <div className='main-live-list'>
    <NavBar isActive />
    <MainHeader />
    <LiveListHeader />
    <LiveCard isActive flag={spain} name='라리가' firstScore='1' secondScore='0' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
    <LiveCard firstScore='2' secondScore='0' firstTeam='맨체스터유나이티드' secondTeam='리버풀' />
    <LiveCard flag={germany} name='분데스리가' firstScore='2' secondScore='0' firstTeam='바이헤른뮌헨' secondTeam='프랑크푸르트' />
    <LiveCard flag={england} name='프리미어리그' firstScore='1' secondScore='0' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
    <LiveCard flag={germany} name='분데스리가' firstScore='2' secondScore='0' firstTeam='바이헤른뮌헨' secondTeam='프랑크푸르트' />
    <Footer />
  </div>

);

export default MainLiveList;
