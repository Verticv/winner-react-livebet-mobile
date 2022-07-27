/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import LiveCard from '../../components/LiveCard';
import Footer from '../../components/Footer';
import NonLiveCard from '../../components/NonLiveCard';
import LiveListHeader from '../../components/LiveListHeader';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import MainHeader from '../../components/MainHeader';

const MainLive = ({ isBlue, setIsBlue, redCardArray, blueCardArray, addToCart, handleClick, cardId, setCardId, cardData, setCardData, isClicked, setIsClicked, isCartDisplayed, setIsCartDisplayed, removeCard, setCart, cart }) => {
  const [idSelect, isIdSelected] = useState('00')
  // const [idBlueSelected, setIdBlueSelected] = useState(0);
  const [isChangeRedOrder, setIsChangeRedOrder] = useState(false);
  const [isChangeBlueOrder, setIsChangeBlueOrder] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(redCardArray);
  const [dataBlue, setDataBlue] = useState(blueCardArray);

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

  useEffect(() => {
    setIsBlue(false);
  }, [isBlue]);

  return (
    <>
      <NavBar />
      <div className='back'>
        <MainHeader />
        <LiveListHeader setIsChangeRedOrder={setIsChangeRedOrder} />
        {data.map(({
          id, flag, name, isActive, firstScore, secondScore, firstTeam, secondTeam, withPlus, type
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
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            type={type}
          />
        ))}
        <NonLiveListHeader setIsChangeBlueOrder={setIsChangeBlueOrder} />
        {dataBlue.map(({ id, flag, name, firstTeam, secondTeam, type }) => (
          <NonLiveCard
            key={id}
            id={id}
            flag={flag}
            name={name}
            firstTeam={firstTeam}
            secondTeam={secondTeam}
            // idBlueSelected={idBlueSelected}
            // setIdBlueSelected={setIdBlueSelected}
            idSelect={idSelect}
            isIdSelected={isIdSelected}
            cardId={cardId}
            setCardId={setCardId}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            type={type}
          />
        ))}
      </div>
      <Footer setIsCartDisplayed={setIsCartDisplayed} isCartDisplayed={isCartDisplayed} cart={cart} isBlue={isBlue} setCart={setCart} removeCard={removeCard} />
    </>
  );
}

export default MainLive;
