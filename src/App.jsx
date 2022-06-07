import './assets/sass/global.scss';
import { Switch, Route } from 'react-router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  const { mainHeaderLive, mainHeaderNonLive } = useSelector((state) => state.cards);
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
          <MainLive key={1} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/cart' exact>
          <Cart cart={cart} setCart={setCart} removeCard={removeCard} />
        </Route>
        <Route path='/mainLiveList' exact>
          <MainLiveList setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/basketball' exact>
          <MainLive key={2} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/volleyball' exact>
          <MainLive key={3} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/mainNonLiveList' exact>
          <MainNonLiveList setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/favorite' exact>
          <Favorite cardId={cardId} setCardId={setCardId} cart={cart} addToCart={addToCart} cardData={cardData} setCardData={setCardData} removeCard={removeCard} handleClick={handleClick} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
