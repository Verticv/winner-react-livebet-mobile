import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import MainHeader from '../../components/MainHeader';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import LiveCard from '../../components/LiveCard';
import NonLiveCard from '../../components/NonLiveCard';
import Footer from '../../components/Footer';

function Favorite({ removeCard, setCardId, cardData, setCardData, cardId, addToCart, handleClick, isClicked, setIsClicked }) {
  const { favoriteCards, nonLiveCard } = useSelector((state) => state.cards);
  const [idSelect, isIdSelected] = useState('00');
  const [idBlueSelected, setIdBlueSelected] = useState(0);
  const [data, setData] = useState(favoriteCards);
  const [nonLiveData, setNonLiveData] = useState(nonLiveCard)
  const [isChangeRedOrder, setIsChangeRedOrder] = useState(false);
  const [isChangeBlueOrder, setIsChangeBlueOrder] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    setIsChangeRedOrder(true);
    if (isChangeRedOrder) {
      const newArr = [...data];
      const sortedArr = newArr.reverse();
      setData(sortedArr);
    } else {
      setData(data)
    }
    setIsChangeRedOrder(false)
  }, [isChangeRedOrder, data]);

  useEffect(() => {
    setIsChangeBlueOrder(true);
    if (isChangeBlueOrder) {
      const newArr = [...nonLiveData]
      const sortedArr = newArr.reverse();
      setNonLiveData(sortedArr);
    } else {
      setNonLiveData(nonLiveData);
    }
    setIsChangeBlueOrder(false);
  }, [isChangeBlueOrder, nonLiveData]);
  return (
    <div className='favorite'>
      <NavBar />
      <MainHeader />
      <LiveListHeader setIsChangeRedOrder={setIsChangeRedOrder} />
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
        type,
      }, index) => <LiveCard
          key={id + Date.now()}
          cardData={cardData}
          setCardData={setCardData}
          removeCard={removeCard}
          setCardId={setCardId}
          cardId={cardId}
          idSelect={idSelect}
          data={data}
          setData={setData}
          isIdSelected={isIdSelected}
          id={id}
          index={index}
          flag={flag}
          name={name}
          isActive={isActive}
          withPlus={withPlus}
          firstScore={firstScore}
          secondScore={secondScore}
          firstTeam={firstTeam}
          secondTeam={secondTeam}
          isFavorite={isFavorite}
          setIsDisplay={setIsDisplay}
          isDisplay={isDisplay}
          addToCart={addToCart}
          handleClick={handleClick}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          
          type={type}
        />)}
      <NonLiveListHeader setIsChangeBlueOrder={setIsChangeBlueOrder} />
      {nonLiveData?.map(({
        id,
        flag,
        name,
        isActive,
        withPlus,
        firstTeam,
        secondTeam,
        isFavorite,
        type,
      }, index) => <NonLiveCard
          key={id + Date.now()}
          id={id}
          index={index}
          nonLiveData={nonLiveData}
          setNonLiveData={setNonLiveData}
          idBlueSelected={idBlueSelected}
          setIdBlueSelected={setIdBlueSelected}
          flag={flag}
          name={name}
          isActive={isActive}
          withPlus={withPlus}
          firstTeam={firstTeam}
          secondTeam={secondTeam}
          isFavorite={isFavorite}
          cardId={cardId}
          setCardId={setCardId}
          addToCart={addToCart}
          isClicked={isClicked} 
          setIsClicked={setIsClicked}
          idSelect={idSelect}
          isIdSelected={isIdSelected}
          type={type}
        />)}
      <Footer />
    </div>
  );
}

export default Favorite;
