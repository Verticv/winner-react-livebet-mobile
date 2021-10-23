import React from 'react';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import NonLiveCard from '../../components/NonLiveCard';
import flag from '../../assets/flag1.png';
import group from '../../assets/group2.png';
import Footer from '../../components/Footer';

function NonLiveBet() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <NonLiveListHeader />
      <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경' secondTeam='라브경브경이브' />
      <img src={group} alt='' style={{ width: '100%', height: 'auto' }} />
      <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경' secondTeam='라브경브경이브' />
      <NonLiveCard flag={flag} name='라이브경기' firstTeam='라이브경' secondTeam='라브경브경이브' />
      <Footer />
    </div>
  );
}

export default NonLiveBet;
