import "./App.css";
import audio from "./assets/beep.mp3";

function App() {
  return (
    <div className="App">
      <div className="clock">
        <h1 className="header">25 + 5 Clock</h1>
        <div className="columns">
          <div id="break-label">
            Break Length
            <div id="break-increment">up</div>
            <div id="break-length">5</div>
            <div id="break-decrement">down</div>
          </div>
          <div id="session-label">
            Session Lenght
            <div id="session-increment">up</div>
            <div id="session-length">25</div>
            <div id="session-decrement">down</div>
          </div>
        </div>
        <div className="break" id="timer-label">
          Break
          <br />
          <h1 id="time-left">1:32</h1>
        </div>
        <div className="btn-container">
          <button id="start-stop">start/stop</button>
          <button id="reset">start/stop</button>
        </div>
        <audio
          src="./assets/beep.mp3"
          id="beep"
          type="audio/mp3"
          autoPlay
        ></audio>
      </div>
    </div>
  );
}

export default App;
