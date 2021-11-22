import React from 'react';
import MainHeader from '../../components/NavBar';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import LiveCard from '../../components/LiveCard';
import Footer from '../../components/Footer';
import spain from '../../assets/images/flags/spain.png';

function Favorite({ cart }) {
  const fav = cart.map(() => (<LiveCard flag={spain} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />

  ));
  return (
    <div>
      <MainHeader />
      <LiveListHeader />
      {fav}
      <NonLiveListHeader />
      {fav}
      <Footer />
    </div>
  );
}

export default Favorite;
