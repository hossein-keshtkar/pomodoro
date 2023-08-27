import React, { useEffect, useState } from "react";

import "../styles/Timer.css";
import { SESSION } from "../constants/keywords";

const Timer = ({ state, dispatch }) => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    const id = setInterval(() => {
      setSeconds((seconds) =>
        seconds > 0 ? seconds - 1 : state.session === 0 ? 0 : 59
      );
    }, 1000);

    setIntervalId(id);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    state.isRunning ? startInterval() : stopInterval();

    return () => clearInterval(intervalId);
  }, [state.isRunning]);

  useEffect(() => {
    if (seconds === 59 && state.isRunning)
      dispatch({ type: SESSION, payload: state.session - 1 });
  }, [seconds]);

  return (
    <div className="timer-container" id="timer-label">
      <h2>Session</h2>
      <br />
      <h1 id="time-left">
        {state.session}:{seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </div>
  );
};

export default Timer;
