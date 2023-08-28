import React, { useEffect, useState } from "react";

import "../styles/Timer.css";

const Timer = ({ state }) => {
  const [sessionInterval, setSessionInterval] = useState(null);
  const [breakInterval, setBreakInterval] = useState(null);
  const [isSessionTime, setIsSessionTime] = useState(true);
  const [sessionTime, setSessionTime] = useState(state.session * 60);
  const [breakTime, setBreakTime] = useState(state.break * 60);
  const [displayMin, setDisplayMin] = useState(state.session);
  const [displaySec, setDisplaySec] = useState(0);

  const sessionCountDown = () => {
    setSessionTime((prev) => prev > 0 && prev - 1);
  };

  const breakCountDown = () => {
    setBreakTime((prev) => prev > 0 && prev - 1);
  };

  const sessionOrBreak = () => {
    sessionTime === 0 && setIsSessionTime(false);
    breakTime === 0 && setIsSessionTime(true);

    // if (sessionTime === 0) {
    //   setBreakTime(state.break * 60);
    //   stopSessionInterval();
    //   startBreakInterval();
    // }

    // if (breakTime === 0) {
    //   setSessionTime(state.session * 60);
    //   stopBreakInterval();
    //   startSessionInterval();
    // }
  };

  const stopSessionInterval = () => {
    clearInterval(sessionInterval);
    setSessionInterval(null);
    console.log("session stoped");
  };

  const stopBreakInterval = () => {
    clearInterval(breakInterval);
    setBreakInterval(null);
    console.log("break stoped");
  };

  const stopIntervals = () => {
    stopSessionInterval();
    stopBreakInterval();
  };

  const startSessionInterval = () => {
    const intervalId = setInterval(() => {
      sessionCountDown();
    }, 1000);

    setSessionInterval(intervalId);
  };

  const startBreakInterval = () => {
    const intervalId = setInterval(() => {
      breakCountDown();
    }, 1000);

    setBreakInterval(intervalId);
  };

  useEffect(() => {
    // state.isRunning
    //   ? isSessionTime
    //     ? startSessionInterval()
    //     : startBreakInterval()
    //   : stopIntervals();

    if (state.isRunning) {
      if (isSessionTime) {
        breakInterval && stopBreakInterval();
        startSessionInterval();
      } else {
        sessionInterval && stopSessionInterval();
        startBreakInterval();
      }
    } else {
      stopIntervals();
    }

    return () => stopIntervals();
  }, [state.isRunning, isSessionTime]);

  useEffect(() => {
    const sessionTimeMin = parseInt(sessionTime / 60);
    const breakTimeMin = parseInt(breakTime / 60);
    const sessionTimeSec = sessionTime % 60;
    const breakTimeSec = breakTime % 60;

    setDisplayMin(isSessionTime ? sessionTimeMin : breakTimeMin);
    setDisplaySec(isSessionTime ? sessionTimeSec : breakTimeSec);

    sessionOrBreak();
  }, [sessionTime, breakTime]);

  useEffect(() => {
    setSessionTime(state.session * 60);
    setBreakTime(state.break * 60);
  }, [state.session, state.break]);

  return (
    <div className="timer-container" id="timer-label">
      <h2>{isSessionTime ? "Session" : "Break"}</h2>
      <br />
      <div id="time-left">
        <h1>{displayMin < 10 ? "0" + displayMin : displayMin}</h1>
        <h1>:</h1>
        <h1>{displaySec < 10 ? "0" + displaySec : displaySec}</h1>
      </div>
    </div>
  );
};

export default Timer;
