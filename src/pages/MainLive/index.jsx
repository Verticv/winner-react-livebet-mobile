import React from 'react';
import NavBar from '../../components/NavBar';
import LiveCard from '../../components/LiveCard';
import Footer from '../../components/Footer';
import flag from '../../assets/images/flags/spain.png';

import NonLiveCard from '../../components/NonLiveCard';

import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import MainHeader from '../../components/MainHeader';

const MainLive = () => (

  <>
    <NavBar />

    <div className='back'>
      <MainHeader />

      <LiveListHeader />

      <LiveCard flag={flag} name='라리가' isActive firstScore='1' secondScore='0' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
      <LiveCard firstScore='2' secondScore='0' firstTeam='맨체스터유나이티드' secondTeam='리버풀' />
      <LiveCard flag={flag} name='분데스리가' firstScore='2' secondScore='0' firstTeam='바이헤른뮌헨' secondTeam='프랑크푸르트' />

      <NonLiveListHeader />

      <NonLiveCard flag={flag} name='라리가' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
      <NonLiveCard firstTeam='맨체스터유나이티드' secondTeam='리버풀' />
    </div>

    <Footer />
  </>

);

export default MainLive;
