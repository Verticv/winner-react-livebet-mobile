import './assets/sass/global.scss';
import { Switch, Route } from 'react-router';
import React, { useState, useEffect } from 'react';
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
  const [isClicked, setIsClicked] = useState(false);
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

  useEffect(() => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const bodyWidth = body.offsetWidth;
    if (bodyWidth <= 1242) {
      const fontSize = (bodyWidth * 16) / 1242;
      html.style.fontSize = `${fontSize}px`;
    }
    window.addEventListener('resize', () => {
      const bodyWidth = body.offsetWidth
      if (bodyWidth <= 1242) {
        const fontSize = (bodyWidth * 16) / 1242;
        html.style.fontSize = `${fontSize}px`;
      }
    });
  }, [])

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <MainLive key={1} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/cart' exact>
          <Cart cart={cart} setCart={setCart} removeCard={removeCard} />
        </Route>
        <Route path='/mainLiveList' exact>
          <MainLiveList isClicked={isClicked} setIsClicked={setIsClicked} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/basketball' exact>
          <MainLive key={2} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/volleyball' exact>
          <MainLive key={3} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/mainNonLiveList' exact>
          <MainNonLiveList isClicked={isClicked} setIsClicked={setIsClicked} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/favorite' exact>
          <Favorite isClicked={isClicked} setIsClicked={setIsClicked} cardId={cardId} setCardId={setCardId} cart={cart} addToCart={addToCart} cardData={cardData} setCardData={setCardData} removeCard={removeCard} handleClick={handleClick} />
        </Route>
        <Route path='/iceHockey' exact>
          <MainLive key={4} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/tennis' exact>
          <MainLive key={5} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/handball' exact>
          <MainLive key={6} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/ufc' exact>
          <MainLive key={7} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
