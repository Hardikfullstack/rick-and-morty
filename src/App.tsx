import React from 'react';
import './App.css';
import CharacterList from './component/character/CharacterList'
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <CharacterList/>
    </div>
  );
}

export default App;
