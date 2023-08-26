import React from "react";

import "../styles/Timer.css";

const Timer = () => {
  return (
    <div className="timer-container" id="timer-label">
      <h2>Session</h2>
      <br />
      <h1 id="time-left">1:32</h1>
    </div>
  );
};

export default Timer;
