import React from 'react';
import LiveListHeader from '../../components/LiveListHeader';
import Footer from '../../components/Footer';
import MiddleNav from './MiddleNav';
import DropDown from './DropDown';
import flag from '../../assets/flag1.png';
import LiveCard from '../../components/LiveCard';

import group from '../../assets/group.png';

function LiveBet() {
  return (
    <div>
      <LiveListHeader />
      <LiveCard flag={flag} name='라이브경기' firstScore='9' secondScore='1' firstTeam='라이브경' secondTeam='라이브' />

      <img src={group} alt='group' style={{ width: '100%', height: 'auto' }} />

      <div>
        <MiddleNav />
        <DropDown text='라이브경기' btnText='라이' number1='1.2' number2='4.8' number3='3.3' rightText='라이' leftText='브경' />
        <DropDown text='라이브경기' btnText='라이' number1='1.2' number2='4.8' number3='3.3' rightText='라이' leftText='브경' />
        <DropDown text='라이브경기' btnText='라이' number1='1.2' number2='4.8' number3='3.3' rightText='라이' leftText='브경' />

      </div>

      <Footer />
    </div>
  );
}

export default LiveBet;
