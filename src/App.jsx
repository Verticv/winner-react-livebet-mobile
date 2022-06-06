import './assets/sass/global.scss';
import { Switch, Route } from 'react-router';
import React, { useState } from 'react';
import Cart from './pages/Cart';
import MainLive from './pages/MainLive';
import MainLiveList from './pages/MainLiveList';
import MainNonLiveList from './pages/MainNonLiveList';
import Favorite from './pages/Favorite';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [cardId, setCardId] = useState();
  const [cardData, setCardData] = useState([]);
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

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <MainLive setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/cart' exact>
          <Cart cart={cart} setCart={setCart} removeCard={removeCard} />
        </Route>
        <Route path='/mainLiveList' exact>
          <MainLiveList />
        </Route>
        <Route path='/mainNonLiveList' exact>
          <MainNonLiveList />
        </Route>
        <Route path='/favorite' exact>
          <Favorite cardId={cardId} setCardId={setCardId} cart={cart} addToCart={addToCart} cardData={cardData} setCardData={setCardData} removeCard={removeCard} handleClick={handleClick} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
