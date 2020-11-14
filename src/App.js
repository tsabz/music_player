import React, { useState } from "react";
import './App.css';
// Import Styles
import "./styles/app.scss";
// Adding Components
import Player from './components/Player';
import Song from './components/Song';
// Import Util 
import data from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[6]);
  
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
