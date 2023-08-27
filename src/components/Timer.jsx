import React from "react";

import "../styles/Timer.css";

const Timer = ({ state, dispatch }) => {
  return (
    <div className="timer-container" id="timer-label">
      <h2>Session</h2>
      <br />
      <div id="time-left">
        <h1>00</h1>
        <h1>:</h1>
        <h1>00</h1>
      </div>
    </div>
  );
};

export default Timer;
