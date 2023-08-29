import React from "react";

// import audio from "./assets/beep.mp3";
import "./App.css";
import Break from "./components/Break";
import Buttons from "./components/Buttons";
import Session from "./components/Session";
import Timer from "./components/Timer";
import { reducer } from "./manager/reducer";
import { initState } from "./data/initState";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <div className="App">
      <h1 className="header">{`Every ${state.session}, Take ${state.break}`}</h1>
      <div className="columns">
        <Break state={state} dispatch={dispatch} />
        <Session state={state} dispatch={dispatch} />
      </div>
      <Timer state={state} />
      <Buttons state={state} dispatch={dispatch} />
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
