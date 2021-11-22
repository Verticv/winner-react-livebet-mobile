import React from 'react';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import NonLiveCard from '../../components/NonLiveCard';
import spain from '../../assets/images/flags/spain.png';
import germany from '../../assets/images/flags/germany.png';
import group from '../../assets/group2.png';
import Footer from '../../components/Footer';

function NonLiveBet() {
  return (
    <div className='non-live-bet'>
      <NonLiveListHeader />
      <NonLiveCard isActive flag={germany} name='분데스리가' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
      <img src={group} alt='' style={{ width: '100%', height: 'auto' }} />
      <NonLiveCard flag={germany} name='분데스리가' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />
      <NonLiveCard flag={spain} name='라리가' firstTeam='바이헤른뮌헨' secondTeam='라브경브경이브' />
      <Footer />
    </div>
  );
}

export default NonLiveBet;
