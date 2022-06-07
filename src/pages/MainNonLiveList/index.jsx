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

const MainNonLiveList = ({ addToCart, handleClick, cardId, setCardId, cardData, setCardData }) => {
  const [isChangeBlueOrder, setIsChangeBlueOrder] = useState(false);
  const [dataBlue, setDataBlue] = useState([]);
  const [idBlueSelected, setIdBlueSelected] = useState(0);
  const mainHeaderNonLive = [{
    id: 0,
    isActive: true,
    flag: germany,
    name: '분데스리가',
    firstTeam: 'FC바르셀로나',
    secondTeam: '레알마드리드',
  }, {
    id: 1,
    isActive: false,
    flag: '',
    name: '',
    firstTeam: '맨체스터유나이티드',
    secondTeam: '리버풀',
  }, {
    id: 2,
    isActive: false,
    flag: spain,
    name: '라리가',
    firstTeam: '바이헤른뮌헨',
    secondTeam: '프랑크푸르트',
  }, {
    id: 3,
    isActive: false,
    flag: england,
    name: '프리미어리그',
    firstTeam: '멘체스터유나이티드',
    secondTeam: '프랑크푸르트',
  }, {
    id: 4,
    isActive: false,
    flag: spain,
    name: '분데스리가',
    firstTeam: 'FC바르셀로나',
    secondTeam: '레알마드리드',
  }];

  useEffect(() => {
    if (!isChangeBlueOrder) {
      setDataBlue(mainHeaderNonLive);
    } else {
      const newArr = [...mainHeaderNonLive]
      const sortedArr = newArr.reverse();
      setDataBlue(sortedArr)
    }
  }, [isChangeBlueOrder]);

  return (
    <div className='main-non-live-list'>
      <NavBar isActive />
      <MainHeader />
      <NonLiveListHeader setIsChangeBlueOrder={setIsChangeBlueOrder} />
      {dataBlue.map(({ id, flag, name, firstTeam, secondTeam, isActive }) => (
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
        />
      ))}
      <Footer />
    </div>
  );
}
export default MainNonLiveList;
