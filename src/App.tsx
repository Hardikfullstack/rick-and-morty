import React from 'react';
import './App.css';
import Character from './component/character/Character'
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Character/>
    </div>
  );
}

export default App;
