import React from 'react';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveCard from '../../components/NonLiveCard';
import Footer from '../../components/Footer';

import group from '../../assets/group.png';

function LiveBet() {
  return (
    <div>
      <LiveListHeader />
      <NonLiveCard />
      <div>
        <img src={group} alt='group' style={{ width: '100%', height: 'auto' }} />
      </div>
      <Footer />
    </div>
  );
}

export default LiveBet;
