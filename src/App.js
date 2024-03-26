// import logo from './logo.svg';
// import styled from "styled-components"
import { useState } from 'react';
import './App.css';
import Startgame from "./Components/Startgame";
import GamePlay from "./Components/GamePlay";

function App() {
  const[isGamePlaying, SetGamePlaying] = useState(false);

  const toggleGame = () => {
    // console.log(prev);
    SetGamePlaying((prev) => !prev);
  }

  return (
    <div className="App">
      <> {isGamePlaying ? <GamePlay/> : <Startgame  toggle = {toggleGame} />}</>
     </div>
  );
}

export default App;
