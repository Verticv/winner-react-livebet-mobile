import React from 'react';
import NavBar from '../../components/NavBar';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import LiveCard from '../../components/LiveCard';
import NonLiveCard from '../../components/NonLiveCard';
import Footer from '../../components/Footer';
import flag from '../../assets/flag1.png';

function Favourite({ cart }) {
  const favv = cart.map((index) => (<LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />

  ));
  return (
    <div>
      <NavBar />
      <LiveListHeader />
      {favv}
      <NonLiveListHeader />
      {favv}
      <Footer />
    </div>
  );
}

export default Favourite;
