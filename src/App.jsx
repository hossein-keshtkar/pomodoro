import React from "react";

import "./App.css";
// import audio from "./assets/beep.mp3";
import Break from "./components/Break";
import Buttons from "./components/Buttons";
import Session from "./components/Session";
import Timer from "./components/Timer";
import { reducer } from "./manager/reducer";
import { initState } from "./data/initState";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initState);

  React.useEffect(() => {
    console.log(state);
  });

  return (
    <div className="App">
      <h1 className="header">25 + 5 Clock</h1>
      <div className="columns">
        <Break />
        <Session />
      </div>
      <Timer />
      <Buttons />
      <audio
        src="./assets/beep.mp3"
        id="beep"
        type="audio/mp3"
        autoPlay
      ></audio>
    </div>
  );
}

export default App;
