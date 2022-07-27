/* eslint-disable */
import React, { useState, useEffect } from 'react';
import LiveCard from '../../components/LiveCard';
import LiveListHeader from '../../components/LiveListHeader';
import MainHeader from '../../components/MainHeader';
import NavBar from '../../components/NavBar';
import spain from '../../assets/images/flags/spain.png';
import germany from '../../assets/images/flags/germany.png';
import england from '../../assets/images/flags/england.png';
import Footer from '../../components/Footer';

const MainLiveList = ({ isBlue, setIsBlue, addToCart, handleClick, cardId, setCardId, cardData, setCardData, isClicked, setIsClicked, isCartDisplayed, setIsCartDisplayed, removeCard, setCart, cart }) => {
  const [idSelect, isIdSelected] = useState('00')
  const [isChangeRedOrder, setIsChangeRedOrder] = useState(false);
  const mainHeaderLive = [{
    id: '00',
    isActive: true,
    flag: spain,
    name: '라리가',
    firstScore: '2',
    secondScore: '0',
    firstTeam: 'FC바르셀로나',
    secondTeam: '레알마드리드',
    isFavorite: false,
    type: 'red',
  }, {
    id: '01',
    isActive: false,
    flag: england,
    name: '프리미어리그',
    firstScore: '2',
    secondScore: '0',
    firstTeam: '맨체스터유나이티드',
    secondTeam: '리버풀',
    isFavorite: false,
    type: 'red',
  }, {
    id: '02',
    isActive: false,
    flag: germany,
    name: '분데스리가',
    firstScore: '2',
    secondScore: '0',
    firstTeam: '바이헤른뮌헨',
    secondTeam: '프랑크푸르트',
    isFavorite: false,
    type: 'red',
  }, {
    id: '03',
    isActive: false,
    flag: spain,
    name: '라리가',
    firstScore: '2',
    secondScore: '0',
    firstTeam: 'FC바르셀로나',
    secondTeam: '레알마드리드',
    isFavorite: false,
    type: 'red',
  }, {
    id: '04',
    isActive: false,
    flag: '',
    name: '',
    firstScore: '2',
    secondScore: '0',
    firstTeam: 'FC바르셀로나',
    secondTeam: '레알마드리드',
    isFavorite: false,
    type: 'red',
  }, {
    id: '05',
    isActive: false,
    flag: '',
    name: '',
    firstScore: '2',
    secondScore: '0',
    firstTeam: 'FC바르셀로나',
    secondTeam: '레알마드리드',
    isFavorite: false,
    type: 'red',
  }, {
    id: '06',
    isActive: false,
    flag: england,
    name: '프리미어리그',
    firstScore: '2',
    secondScore: '0',
    firstTeam: '맨체스터유나이티드',
    secondTeam: '리버풀',
    isFavorite: false,
    type: 'red',
  }];

  const [data, setData] = useState(mainHeaderLive);

  useEffect(() => {
    if (!isChangeRedOrder) {
      setData(mainHeaderLive);
    } else {
      const newArr = [...mainHeaderLive]
      const sortedArr = newArr.reverse();
      setData(sortedArr)
    }
  }, [isChangeRedOrder]);

  useEffect(() => {
    setIsBlue(false);
  }, [isBlue]);

  return (
    <div className='main-live-list'>
      <NavBar isActive />
      <MainHeader />
      <LiveListHeader setIsChangeRedOrder={setIsChangeRedOrder} />
      {data.map(({ id, isActive, flag, name, firstScore, secondScore, firstTeam, secondTeam, isFavorite, type }) => (
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
          isFavorite={isFavorite}
          idSelect={idSelect}
          isIdSelected={isIdSelected}
          setCardId={setCardId}
          cardData={cardData}
          setCardData={setCardData}
          cardId={cardId}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          type={type}
        />
      ))}
      <Footer setIsCartDisplayed={setIsCartDisplayed} isCartDisplayed={isCartDisplayed} cart={cart} isBlue={isBlue} setCart={setCart} removeCard={removeCard} />
    </div>
  );
}
export default MainLiveList;
