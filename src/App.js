
import React, { useState, useEffect } from 'react';
import BotCollection from './components/Botcollection';
import Botarmy from './components/Botarmy';
import './App.css';

function App() {

  useEffect(() => {
    fetchBots();
  }, []);

  function fetchBots() {
    fetch('http://localhost:3000/bots')
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;