import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import LiveCard from '../../components/LiveCard';
import Footer from '../../components/Footer';
import NonLiveCard from '../../components/NonLiveCard';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import MainHeader from '../../components/MainHeader';

const MainLive = ({ redCardArray, blueCardArray, addToCart, handleClick, cardId, setCardId, cardData, setCardData }) => {
  const [idSelect, isIdSelected] = useState(0)
  const [idBlueSelected, setIdBlueSelected] = useState(0);
  const [isChangeRedOrder, setIsChangeRedOrder] = useState(false);
  const [isChangeBlueOrder, setIsChangeBlueOrder] = useState(false);
  const [data, setData] = useState([]);
  const [dataBlue, setDataBlue] = useState([]);

  useEffect(() => {
    if (!isChangeRedOrder) {
      setData(redCardArray);
    } else {
      const newArr = [...redCardArray]
      const sortedArr = newArr.reverse();
      setData(sortedArr)
    }
  }, [isChangeRedOrder, redCardArray]);

  useEffect(() => {
    if (!isChangeBlueOrder) {
      setDataBlue(blueCardArray);
    } else {
      const newArr = [...blueCardArray]
      const sortedArr = newArr.reverse();
      setDataBlue(sortedArr)
    }
  }, [isChangeBlueOrder, blueCardArray]);

  return (
    <>
      <NavBar />
      <div className='back'>
        <MainHeader />
        <LiveListHeader setIsChangeRedOrder={setIsChangeRedOrder} />
        {data.map(({
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
            setCardId={setCardId}
            cardData={cardData}
            setCardData={setCardData}
            cardId={cardId}
          />
        ))}
        <NonLiveListHeader setIsChangeBlueOrder={setIsChangeBlueOrder} />
        {dataBlue.map(({ id, flag, name, firstTeam, secondTeam }) => (
          <NonLiveCard
            key={id}
            id={id}
            flag={flag}
            name={name}
            firstTeam={firstTeam}
            secondTeam={secondTeam}
            idBlueSelected={idBlueSelected}
            setIdBlueSelected={setIdBlueSelected}
            cardId={cardId}
            setCardId={setCardId}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default MainLive;
