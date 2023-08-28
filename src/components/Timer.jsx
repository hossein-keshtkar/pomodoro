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

  const sessionTimeMin = parseInt(sessionTime / 60);
  const breakTimeMin = parseInt(breakTime / 60);
  const sessionTimeSec = sessionTime % 60;
  const breakTimeSec = breakTime % 60;

  const intervalTypeText = isSessionTime ? "Session" : "Break";

  const formatTime = (time) => (time < 10 ? "0" : "") + time;

  const countdown = (timeType) => {
    if (timeType === "session") {
      setSessionTime((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (timeType === "break") {
      setBreakTime((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const startInterval = (timeType) => {
    const intervalId = setInterval(() => {
      countdown(timeType);
    }, 1000);

    if (timeType === "session") {
      setSessionInterval(intervalId);
    } else if (timeType === "break") {
      setBreakInterval(intervalId);
    }
  };

  const sessionOrBreak = () => {
    if (sessionTime === 0) {
      setBreakTime(state.break * 60);
      setIsSessionTime(false);
    } else if (breakTime === 0) {
      setSessionTime(state.session * 60);
      setIsSessionTime(true);
    }
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

  useEffect(() => {
    if (state.isRunning) {
      if (isSessionTime) {
        startInterval("session");
      } else {
        startInterval("break");
      }
    } else {
      if (isSessionTime) {
        stopSessionInterval();
      } else {
        stopBreakInterval();
      }
    }

    return () => {
      if (isSessionTime) {
        stopSessionInterval();
      } else {
        stopBreakInterval();
      }
    };
  }, [state.isRunning, isSessionTime]);

  useEffect(() => {
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
      <h2>{intervalTypeText}</h2>
      <br />
      <div id="time-left">
        <h1>{formatTime(displayMin)}</h1>
        <h1>:</h1>
        <h1>{formatTime(displaySec)}</h1>
      </div>
    </div>
  );
};

export default Timer;
