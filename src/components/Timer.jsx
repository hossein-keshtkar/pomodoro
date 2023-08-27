import React, { useEffect, useState } from "react";

import "../styles/Timer.css";
// import { SESSION } from "../constants/keywords";

const Timer = ({ state, dispatch }) => {
  const [sessionTime, setSessionTime] = useState(state.session * 60);
  const [breakTime, setBreakTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const sessionTimeHandler = () => {
    if (sessionTime <= 0) {
      setBreakTime(state.break * 60);
      return;
    }

    sessionTime > 0 && setSessionTime((prev) => prev - 1);
  };

  const breakTimeHandler = () => {
    if (breakTime <= 0) {
      setSessionTime(state.session * 60);
      return;
    }

    setBreakTime((prev) => prev - 1);
  };

  const startInterval = () => {
    const id = setInterval(() => {
      sessionTimeHandler();
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
    setSessionTime(state.session * 60);
    setBreakTime(state.break * 60);
  }, [state.session, state.break]);

  //test

  return (
    <div className="timer-container" id="timer-label">
      <h2>Session</h2>
      <br />
      <div id="time-left">
        <h1>{`${
          sessionTime
            ? parseInt(sessionTime / 60) < 10
              ? "0" + parseInt(sessionTime / 60)
              : parseInt(sessionTime / 60)
            : parseInt(breakTime / 60) < 10
            ? "0" + parseInt(breakTime / 60)
            : parseInt(breakTime / 60)
        }`}</h1>
        <h1>:</h1>
        <h1>{sessionTime >= 0 ? sessionTime % 60 : breakTime % 60}</h1>
      </div>
    </div>
  );
};

export default Timer;
