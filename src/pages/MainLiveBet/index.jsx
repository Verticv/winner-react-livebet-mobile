import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LiveListHeader from '../../components/LiveListHeader';
import Footer from '../../components/Footer';
import MiddleNav from './MiddleNav';
import DropDown from './DropDown';
import group from '../../assets/images/other/group.png';
import LiveCard from '../../components/LiveCard';

function LiveBet({ handleClick, cardId }) {
  const [idActive, setIdActive] = useState(0);
  const { mainHeaderLive } = useSelector((state) => state.cards);
  return (
    <div className='live-bet-page'>
      <LiveListHeader />
      <LiveCard
          flag={mainHeaderLive[cardId]?.flag}
          name={mainHeaderLive[cardId]?.name}
          isActive={mainHeaderLive[cardId]?.isActive}
          firstScore={mainHeaderLive[cardId]?.firstScore}
          secondScore={mainHeaderLive[cardId]?.secondScore}
          firstTeam={mainHeaderLive[cardId]?.firstTeam}
          secondTeam={mainHeaderLive[cardId]?.secondTeam} 
        /> 
      <img src={group} alt='group' style={{ width: '100%', height: 'auto' }} />
      <div>
        <MiddleNav idActive={idActive} setIdActive={setIdActive} />
        <div className='dropdown-wrapper'>
          {+idActive === 0
            ? <>
              <DropDown add={handleClick} text='홈팀 오버언더' row1number1='1.25' row1number2='4.05' row1number3='3.3' row2number1='1.25' row2number2='4.05' row2number3='3.3' rightText='오버' leftText='언더' isFirstItemRed />
              <DropDown add={handleClick} text='오버언더' row1number1='3.15' row1number2='4.05' row1number3='1.3' row2number1='1.45' row2number2='4.05' row2number3='2.4' rightText='오버' leftText='언더' />
              <DropDown add={handleClick} text='승무패핸디캡' row1number1='9.50' row1number2='5.75' row1number3='1.22' row2number1='1.30' row2number2='4.90' row2number3='8.25' rightText='맨체스터유나이티드' leftText='리버플' />
            </>
            : null
          }
          {+idActive === 1 
            ? <DropDown add={handleClick} text='승무패핸디캡' row1number1='9.50' row1number2='5.75' row1number3='1.22' row2number1='1.30' row2number2='4.90' row2number3='8.25' rightText='맨체스터유나이티드' leftText='리버플' />
            : null
          }
          {+idActive === 2 
            ? <>
            <DropDown add={handleClick} text='홈팀 오버언더' row1number1='1.25' row1number2='4.05' row1number3='3.3' row2number1='1.25' row2number2='4.05' row2number3='3.3' rightText='오버' leftText='언더' isFirstItemRed />
              <DropDown add={handleClick} text='오버언더' row1number1='3.15' row1number2='4.05' row1number3='1.3' row2number1='1.45' row2number2='4.05' row2number3='2.4' rightText='오버' leftText='언더' />
            </>
            : null
          }
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LiveBet;
