import './assets/sass/global.scss';
import { Switch, Route } from 'react-router';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MainLive from './pages/MainLive';
import MainLiveList from './pages/MainLiveList';
import MainNonLiveList from './pages/MainNonLiveList';
import Favorite from './pages/Favorite';
import { isIOS } from 'react-device-detect';

import './App.css';
import ScrollButton from './components/ScrollButton';

function App() {
  const [cart, setCart] = useState([]);
  const [cardId, setCardId] = useState();
  const [cardData, setCardData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isBlue, setIsBlue] = useState(false);
  const { mainHeaderLive, mainHeaderNonLive } = useSelector((state) => state.cards);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

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
    <div style={{marginBottom: isIOS ? '9.4rem' : '9rem'}}>
      <Switch>
        <Route path='/' exact>
          <MainLive key={1} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/mainLiveList' exact>
          <MainLiveList key={8} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/basketball' exact>
          <MainLive key={2} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/volleyball' exact>
          <MainLive key={3} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/mainNonLiveList' exact>
          <MainNonLiveList key={9} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/favorite' exact>
          <Favorite key={10} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} cardId={cardId} setCardId={setCardId} addToCart={addToCart} cardData={cardData} setCardData={setCardData} handleClick={handleClick} />
        </Route>
        <Route path='/iceHockey' exact>
          <MainLive key={4} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/tennis' exact>
          <MainLive key={5} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/handball' exact>
          <MainLive key={6} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
        <Route path='/ufc' exact>
          <MainLive key={7} isCartDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed} cart={cart} setCart={setCart} removeCard={removeCard} isBlue={isBlue} setIsBlue={setIsBlue} isClicked={isClicked} setIsClicked={setIsClicked} redCardArray={mainHeaderLive} blueCardArray={mainHeaderNonLive} setCardId={setCardId} cardId={cardId} cardData={cardData} setCardData={setCardData} addToCart={addToCart} handleClick={handleClick} />
        </Route>
      </Switch>
      <ScrollButton />
    </div>
  );
}

export default App;
