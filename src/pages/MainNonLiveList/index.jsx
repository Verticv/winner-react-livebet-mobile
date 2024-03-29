/* eslint-disable */
import React, { useState, useEffect } from 'react';
import NonLiveCard from '../../components/NonLiveCard';
import NonLiveListHeader from '../../components/NonLiveListHeader';
import MainHeader from '../../components/MainHeader';
import NavBar from '../../components/NavBar';
import spain from '../../assets/images/flags/spain.png';
import germany from '../../assets/images/flags/germany.png';
import england from '../../assets/images/flags/england.png';
import Footer from '../../components/Footer';

const MainNonLiveList = ({ isBlue, setIsBlue, addToCart, handleClick, cardId, setCardId, cardData, setCardData, isClicked, setIsClicked, isCartDisplayed, setIsCartDisplayed, removeCard, setCart, cart }) => {
  const [isChangeBlueOrder, setIsChangeBlueOrder] = useState(false);
  const [idBlueSelected, setIdBlueSelected] = useState(0);
  const [idSelect, isIdSelected] = useState();
  const mainHeaderNonLive = [{
    id: 0,
    isActive: true,
    flag: spain,
    name: '라리가',
    firstTeam: 'FC바르셀로나',
    secondTeam: '레알마드리드',
    type: 'blue',
  }, {
    id: 1,
    isActive: false,
    flag: england,
    name: '프리미어리그',
    firstTeam: '맨체스터유나이티드',
    secondTeam: '리버풀',
    type: 'blue',
  }, {
    id: 2,
    isActive: false,
    flag: germany,
    name: '분데스리가',
    firstTeam: '맨체스터유나이티드',
    secondTeam: '리버풀',
    type: 'blue',
  }, {
    id: 3,
    isActive: false,
    flag: spain,
    name: '라리가',
    firstTeam: '멘체스터유나이티드',
    secondTeam: '리버풀',
    type: 'blue',
  }, {
    id: 4,
    isActive: false,
    flag: '',
    name: '',
    firstTeam: '멘체스터유나이티드',
    secondTeam: '리버풀',
    type: 'blue',
  }, {
    id: 5,
    isActive: false,
    flag: '',
    name: '',
    firstTeam: '멘체스터유나이티드',
    secondTeam: '리버풀',
    type: 'blue',
  }, {
    id: 6,
    isActive: false,
    flag: spain,
    name: '라리가',
    firstTeam: '멘체스터유나이티드',
    secondTeam: '리버풀',
    type: 'blue',
  }, {
    id: 7,
    isActive: false,
    flag: england,
    name: '프리미어리그',
    firstTeam: '맨체스터유나이티드',
    secondTeam: '리버풀',
    type: 'blue',
  }, {
    id: 8,
    isActive: false,
    flag: england,
    name: '프리미어리그',
    firstTeam: '맨체스터유나이티드',
    secondTeam: '리버풀',
    type: 'blue'
  }];
  const [dataBlue, setDataBlue] = useState(mainHeaderNonLive);

  useEffect(() => {
    if (!isChangeBlueOrder) {
      setDataBlue(mainHeaderNonLive);
    } else {
      const newArr = [...mainHeaderNonLive]
      const sortedArr = newArr.reverse();
      setDataBlue(sortedArr)
    }
  }, [isChangeBlueOrder]);

  useEffect(() => {
    setIsBlue(true);
  }, [isBlue]);

  return (
    <div className='main-non-live-list'>
      <NavBar isActive />
      <MainHeader />
      <NonLiveListHeader setIsChangeBlueOrder={setIsChangeBlueOrder} />
      {dataBlue.map(({ id, flag, name, firstTeam, secondTeam, isActive, type }) => (
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
          isActive={isActive}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          type={type}
          idSelect={idSelect}
          isIdSelected={isIdSelected}
        />
      ))}
      <Footer setIsCartDisplayed={setIsCartDisplayed} isCartDisplayed={isCartDisplayed} cart={cart} isBlue={isBlue} setCart={setCart} removeCard={removeCard} />
    </div>
  );
}
export default MainNonLiveList;
