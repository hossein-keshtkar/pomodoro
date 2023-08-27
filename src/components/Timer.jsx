import React, { useEffect, useState } from "react";

import "../styles/Timer.css";

const Timer = ({ state }) => {
  const [intervalOne, setIntervalOne] = useState(null);
  const [intervalTwo, setIntervalTwo] = useState(null);
  const [isSessionTime, setIsSessionTime] = useState(true);
  const [time, setTime] = useState(state.session * 60);
  const [breakTime, setBreakTime] = useState(state.break * 60);
  const [min, setMin] = useState(state.session);
  const [sec, setSec] = useState(0);

  const sessionCountDown = () => {
    setTime((prev) => prev > 0 && prev - 1);
  };

  const breakCountDown = () => {
    setBreakTime((prev) => prev > 0 && prev - 1);
  };

  const sessionOrBreak = () => {
    time === 0 && setIsSessionTime((prev) => !prev);
  };

  const startSessionInterval = () => {
    const intervalId = setInterval(() => {
      sessionCountDown();
    }, 1000);

    setIntervalOne(intervalId);
  };

  const stopIntervalOne = () => {
    clearInterval(intervalOne);
    setIntervalOne(null);
  };

  const stopIntervalTwo = () => {
    clearInterval(intervalTwo);
    setIntervalTwo(null);
  };

  const stopIntervals = () => {
    stopIntervalOne();
    stopIntervalTwo();
  };

  const startBreakInterval = () => {
    const intervalId = setInterval(() => {
      breakCountDown();
    }, 1000);

    setIntervalTwo(intervalId);
  };

  useEffect(() => {
    state.isRunning
      ? isSessionTime
        ? startSessionInterval()
        : startBreakInterval()
      : stopIntervals();

    return () => stopIntervals();
  }, [state.isRunning, isSessionTime]);

  useEffect(() => {
    setMin(isSessionTime ? parseInt(time / 60) : parseInt(breakTime / 60));
    setSec(isSessionTime ? time % 60 : breakTime % 60);
    sessionOrBreak();
  }, [time, breakTime]);

  useEffect(() => {
    setTime(state.session * 60);
  }, [state.session]);

  return (
    <div className="timer-container" id="timer-label">
      <h2>{isSessionTime ? "Session" : "Break"}</h2>
      <br />
      <div id="time-left">
        <h1>{min < 10 ? "0" + min : min}</h1>
        <h1>:</h1>
        <h1>{sec < 10 ? "0" + sec : sec}</h1>
      </div>
    </div>
  );
};

export default Timer;
