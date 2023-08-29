import React, { useEffect, useState } from "react";

import "../styles/Timer.css";

//** when reset btn pressed, timer also needs to be reset

const Timer = ({ state }) => {
  const [sessionTime, setSessionTime] = useState(state.session * 60);
  const [breakTime, setBreakTime] = useState(state.break * 60);
  const [isSessionTime, setIsSessionTime] = useState(true);
  const [displayMin, setDisplayMin] = useState(0);
  const [displaySec, setDisplaySec] = useState(0);
  const timeForWhat = isSessionTime ? "Session" : "Break";

  const displayTime = (min, sec) => {
    const minutes = min < 10 ? "0" + min : min;
    const seconds = sec < 10 ? "0" + sec : sec;

    return { min: minutes, sec: seconds };
  };

  const whatIsTimeFor = () => {
    if (sessionTime < 0) {
      setIsSessionTime(false);
      setSessionTime(state.session * 60);
      return;
    } else if (breakTime < 0) {
      setIsSessionTime(true);
      setBreakTime(state.break * 60);
      return;
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      isSessionTime
        ? setSessionTime((prev) => prev - 1)
        : setBreakTime((prev) => prev - 1);
    }, 1000);

    !state.isRunning && clearInterval(id);

    return () => clearInterval(id);
  }, [state.isRunning, isSessionTime]);

  useEffect(() => {
    const sessionOrBreakMin = isSessionTime
      ? parseInt(sessionTime / 60)
      : parseInt(breakTime / 60);

    const sessionOrBreakSec = isSessionTime ? sessionTime % 60 : breakTime % 60;

    setDisplayMin(sessionOrBreakMin);
    setDisplaySec(sessionOrBreakSec);

    whatIsTimeFor();
  }, [sessionTime, breakTime, isSessionTime]);

  useEffect(() => {
    setSessionTime(state.session * 60);
    setBreakTime(state.break * 60);
  }, [state.session, state.break]);

  return (
    <div
      className="timer-container"
      id="timer-label"
      style={{ borderColor: displayMin < 1 && "red" }}
    >
      <h2>{timeForWhat}</h2>
      <br />
      <div id="time-left">
        <h1>{displayTime(displayMin, displaySec).min}</h1>
        <h1>:</h1>
        <h1>{displayTime(displayMin, displaySec).sec}</h1>
      </div>
    </div>
  );
};

export default Timer;
