import { Switch, Route } from 'react-router';
import React from 'react';
import Cart from './pages/Cart';
import MainLive from './pages/MainLive';
import LiveBet from './pages/MainLiveBet';
import NonLiveBet from './pages/NonLiveBet';

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <MainLive />
        </Route>
        <Route path='/cart' exact>
          <Cart />
        </Route>
        <Route path='/liveBet' exact>
          <LiveBet />
        </Route>
        <Route path='/nonLiveBet' exact>
          <NonLiveBet />
        </Route>
      </Switch>
    </>
  );
}

export default App;
