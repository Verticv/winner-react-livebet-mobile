import React from 'react';
import NavBar from '../../components/NavBar';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import LiveCard from '../../components/LiveCard';
import NonLiveCard from '../../components/NonLiveCard';
import Footer from '../../components/Footer';

function Favourite({
  fav,
}) {
  return (
    <div>
      <NavBar />
      <LiveListHeader />
      {fav.map(() => <LiveCard />)}
      <Footer />
    </div>
  );
}

export default Favourite;
