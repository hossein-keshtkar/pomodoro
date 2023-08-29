import React from "react";

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
      <div className="header">
        <h1>Every</h1>
        <h1 className="header-session">{`${state.session}`}</h1>
        <h1>, Take</h1>
        <h1 className="header-break">{`${state.break}`}</h1>
      </div>
      {/* <h1 className="header">{`Every ${state.session}, Take ${state.break}`}</h1> */}
      <div className="columns">
        <Break state={state} dispatch={dispatch} />
        <Session state={state} dispatch={dispatch} />
      </div>
      <Timer state={state} />
      <Buttons state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
