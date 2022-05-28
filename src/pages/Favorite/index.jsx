import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import MainHeader from '../../components/MainHeader';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import LiveCard from '../../components/LiveCard';
import NonLiveCard from '../../components/NonLiveCard';
import Footer from '../../components/Footer';

function Favorite({ removeCard }) {
  const { favoriteCards, nonLiveCard } = useSelector((state) => state.cards);
  const [idSelect, isIdSelected] = useState(0);
  const [idBlueSelected, setIdBlueSelected] = useState(0);
  const [data, setData] = useState(favoriteCards);
  const [nonLiveData, setNonLiveData] = useState(nonLiveCard)

  return (
    <div className='favorite'>
      <NavBar />
      <MainHeader />
      <LiveListHeader />
      {data?.map(({ 
        id,
        flag,
        name,
        isActive,
        withPlus,
        firstScore,
        secondScore,
        firstTeam,
        secondTeam,
        isFavorite,
        } , index) => <LiveCard key={id} removeCard={removeCard} idSelect={idSelect} data={data} setData={setData} isIdSelected={isIdSelected} id={id} index={index} flag={flag} name={name} isActive={isActive} withPlus={withPlus} firstScore={firstScore} secondScore={secondScore} firstTeam={firstTeam} secondTeam={secondTeam} isFavorite={isFavorite} />)}
      <NonLiveListHeader />
      {nonLiveData?.map(({
        id,
        flag,
        name,
        isActive,
        withPlus,
        firstTeam,
        secondTeam,
        isFavorite
      }, index) => <NonLiveCard key={id} id={id} index={index} nonLiveData={nonLiveData} setNonLiveData={setNonLiveData} idBlueSelected={idBlueSelected} setIdBlueSelected={setIdBlueSelected} flag={flag} name={name} isActive={isActive} withPlus={withPlus} firstTeam={firstTeam} secondTeam={secondTeam} isFavorite={isFavorite} />)}
      <Footer />
    </div>
  );
}

export default Favorite;
