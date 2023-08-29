import React from "react";

import "./App.css";
import Break from "./components/Break";
import Buttons from "./components/Buttons";
import Session from "./components/Session";
import Timer from "./components/Timer";
import { reducer } from "./manager/reducer";
import { initState } from "./data/initState";
import Context from "./manager/Context";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initState);
  const [isResetClicked, setIsResetClicked] = React.useState(false);

  return (
    <Context.Provider value={{ isResetClicked, setIsResetClicked }}>
      <div className="App">
        <h1 className="header">{`Every ${state.session}, Take ${state.break}`}</h1>
        <div className="columns">
          <Break state={state} dispatch={dispatch} />
          <Session state={state} dispatch={dispatch} />
        </div>
        <Timer state={state} />
        <Buttons state={state} dispatch={dispatch} />
        <footer>
          Development by <em>Hossein Keshtkar</em>
          <br /> August 2023
        </footer>
      </div>
    </Context.Provider>
  );
}

export default App;
