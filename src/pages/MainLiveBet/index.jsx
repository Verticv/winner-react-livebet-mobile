import React from 'react';
import LiveListHeader from '../../components/LiveListHeader';
import Footer from '../../components/Footer';
import MiddleNav from './MiddleNav';
import DropDown from './DropDown';
import group from '../../assets/images/other/group.png';
import flag from '../../assets/images/flags/spain.png';
import LiveCard from '../../components/LiveCard';

function LiveBet({ handleClick }) {
  return (
    <div>
      <LiveListHeader />
      <LiveCard flag={flag} name='라리가' isActive firstScore='1' secondScore='0' firstTeam='FC바르셀로나' secondTeam='레알마드리드' />

      <img src={group} alt='group' style={{ width: '100%', height: 'auto' }} />

      <div>
        <MiddleNav />
        <div className='dropdown-wrapper'>
          <DropDown add={handleClick} text='홈팀 오버언더' row1number1='1.25' row1number2='4.05' row1number3='3.3' row2number1='1.25' row2number2='4.05' row2number3='3.3' rightText='오버' leftText='언더' isFirstItemRed />
          <DropDown add={handleClick} text='오버언더' row1number1='3.15' row1number2='4.05' row1number3='1.3' row2number1='1.45' row2number2='4.05' row2number3='2.4' rightText='오버' leftText='언더' />
          <DropDown add={handleClick} text='승무패핸디캡' row1number1='9.50' row1number2='5.75' row1number3='1.22' row2number1='1.30' row2number2='4.90' row2number3='8.25' rightText='맨체스터유나이티드' leftText='리버플' />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LiveBet;
