import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import LiveCard from '../../components/LiveCard';
import Footer from '../../components/Footer';

import NonLiveCard from '../../components/NonLiveCard';

import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import MainHeader from '../../components/MainHeader';

const MainLive = ({ addToCart, handleClick }) => {
  const { mainHeaderLive, mainHeaderNonLive } = useSelector((state) => state.cards);
  const [idSelect, isIdSelected] = useState(0)
  const [idBlueSelected, setIdBlueSelected] = useState(0);
return (
  <>
    <NavBar />
    <div className='back'>
      <MainHeader />
      <LiveListHeader />
      {mainHeaderLive.map(({
        id, flag, name, isActive, firstScore, secondScore, firstTeam, secondTeam, withPlus
      }) => ( 
        <LiveCard
          key={id}
          id={id}
          addToCart={addToCart}
          handleClick={handleClick}
          flag={flag}
          name={name}
          isActive={isActive}
          firstScore={firstScore}
          secondScore={secondScore}
          firstTeam={firstTeam}
          secondTeam={secondTeam}
          idSelect={idSelect}
          isIdSelected={isIdSelected}
          withPlus={withPlus}
        />
      ))}
      <NonLiveListHeader />
      {mainHeaderNonLive.map(({ id, flag, name, firstTeam, secondTeam }) => (
        <NonLiveCard
          key={id}
          id={id}
          flag={flag}
          name={name}
          firstTeam={firstTeam}
          secondTeam={secondTeam}
          idBlueSelected={idBlueSelected}
          setIdBlueSelected={setIdBlueSelected}
        />
      ))}
    </div>
    <Footer />
  </>
);
}

export default MainLive;
