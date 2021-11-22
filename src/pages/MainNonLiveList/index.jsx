import React from 'react';
import NonLiveCard from '../../components/NonLiveCard';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import MainHeader from '../../components/MainHeader';
import NavBar from '../../components/NavBar';
import spain from '../../assets/images/flags/spain.png';
import germany from '../../assets/images/flags/germany.png';
import england from '../../assets/images/flags/england.png';
import Footer from '../../components/Footer';

const MainNonLiveList = () => (
  <div className='main-non-live-list'>
    <NavBar isActive />
    <MainHeader />
    <NonLiveListHeader />
    <NonLiveCard isActive flag={germany} name='분데스리가' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
    <NonLiveCard firstTeam='맨체스터유나이티드' secondTeam='리버풀' />
    <NonLiveCard flag={spain} name='라리가' firstTeam='바이헤른뮌헨' secondTeam='프랑크푸르트' />
    <NonLiveCard flag={england} name='프리미어리그' firstTeam='멘체스터유나이티드' secondTeam='프랑크푸르트' />
    <NonLiveCard flag={spain} name='분데스리가' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />

    <Footer />
  </div>

);

export default MainNonLiveList;
