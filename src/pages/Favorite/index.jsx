import React from 'react';
import NavBar from '../../components/NavBar';
import MainHeader from '../../components/MainHeader';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import LiveCard from '../../components/LiveCard';
import NonLiveCard from '../../components/NonLiveCard';
import Footer from '../../components/Footer';
import spain from '../../assets/images/flags/spain.png';
import germany from '../../assets/images/flags/germany.png';
import england from '../../assets/images/flags/england.png';

function Favorite() {
  return (
    <div className='favorite'>
      <NavBar />
      <MainHeader />
      <LiveListHeader />
      <LiveCard flag={spain} name='라리가' isActive withPlus firstScore='1' secondScore='0' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
      <LiveCard flag={england} name='프리미어리그' withPlus firstScore='1' secondScore='0' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
      <LiveCard flag={germany} name='분데스리가' withPlus firstScore='1' secondScore='0' firstTeam='바이헤른뮌헨' secondTeam='프랑크푸르트' />
      <NonLiveListHeader />
      <NonLiveCard flag={spain} name='라리가' isActive withPlus firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
      <NonLiveCard flag={germany} name='' firstTeam='맨체스터유나이티드' secondTeam='리버풀' />
      <Footer />
    </div>
  );
}

export default Favorite;
