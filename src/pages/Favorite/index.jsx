import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import MainHeader from '../../components/MainHeader';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import LiveCard from '../../components/LiveCard';
import NonLiveCard from '../../components/NonLiveCard';
import Footer from '../../components/Footer';

function Favorite() {
  const { favoriteCards, nonLiveCard } = useSelector((state) => state.cards);
  const [idSelect, isIdSelected] = useState(0);
  const [idBlueSelected, setIdBlueSelected] = useState(0);

  return (
    <div className='favorite'>
      <NavBar />
      <MainHeader />
      <LiveListHeader />
      {favoriteCards.map(({ 
        id,
        flag,
        name,
        isActive,
        withPlus,
        firstScore,
        secondScore,
        firstTeam,
        secondTeam
        }) => <LiveCard key={id} idSelect={idSelect} isIdSelected={isIdSelected} id={id} flag={flag} name={name} isActive={isActive} withPlus={withPlus} firstScore={firstScore} secondScore={secondScore} firstTeam={firstTeam} secondTeam={secondTeam} />)}
      <NonLiveListHeader />
      {nonLiveCard.map(({
        id,
        flag,
        name,
        isActive,
        withPlus,
        firstTeam,
        secondTeam
      }) => <NonLiveCard key={id} id={id} idBlueSelected={idBlueSelected} setIdBlueSelected={setIdBlueSelected} flag={flag} name={name} isActive={isActive} withPlus={withPlus} firstTeam={firstTeam} secondTeam={secondTeam} />)}
      <Footer />
    </div>
  );
}

export default Favorite;
