import './App.css';
// Import Styles
import "./styles/app.scss";
// Adding Components
import Player from './components/Player';
import Song from './components/Song';
// Import Util 
import data from "./util";

function App() {
  
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
