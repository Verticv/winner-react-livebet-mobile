import { Switch, Route } from 'react-router';
import React, { useState } from 'react';
import Cart from './pages/Cart';
import MainLive from './pages/MainLive';
import LiveBet from './pages/MainLiveBet';
import MainNonLiveBet from './pages/MainNonLiveBet';
import MainLiveList from './pages/MainLiveList';
import MainNonLiveList from './pages/MainNonLiveList';
import Favourite from './pages/Favourite';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleClick = () => {
    addToCart();
  };

  const removeCard = () => {
    const newArr = cart.splice(0, cart.length - 1);
    setCart(newArr);
  };

  const addToFav = (item) => {
    setCart([...fav, item]);
  };

  const handleFav = () => {
    addToFav();
  };

  const removeFav = () => {
    const newArr = cart.splice(0, cart.length - 1);
    setFav(newArr);
  };

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <MainLive fav={fav} setFav={setFav} handleFav={handleFav} addToFav={addToFav} />
        </Route>
        <Route path='/cart' exact>
          <Cart cart={cart} removeCard={removeCard} />
        </Route>
        <Route path='/liveBet' exact>
          <LiveBet addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/nonLiveBet' exact>
          <MainNonLiveBet />
        </Route>

        <Route path='/mainLiveList' exact>
          <MainLiveList />
        </Route>

        <Route path='/mainNonLiveList' exact>
          <MainNonLiveList />
        </Route>
        <Route path='/favourite' exact>
          <Favourite fav={fav} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
