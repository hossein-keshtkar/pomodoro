import React, { useEffect, useState, useRef, useContext } from "react";

import "../styles/Timer.css";
import { displayTimeProperly } from "../funcs/displayTimeProperly";
import { timeDestructurer } from "../funcs/timeDestructurer";
import beep from "../assets/beep.mp3";
import Context from "../manager/Context";

const Timer = ({ state }) => {
  const [sessionTime, setSessionTime] = useState(state.session * 60);
  const [breakTime, setBreakTime] = useState(state.break * 60);
  const [isSessionTime, setIsSessionTime] = useState(true);
  const [beepPlayTimes, setBeepPlayTimes] = useState(3);
  const [displayMin, setDisplayMin] = useState(0);
  const [displaySec, setDisplaySec] = useState(0);
  const timeForWhat = isSessionTime ? "Session" : "Break";
  const { isResetClicked } = useContext(Context);
  const audioRef = useRef();

  const style = {
    borderColor:
      displayMin < 1 && state.isRunning
        ? "red"
        : state.isRunning
        ? "blue"
        : "#444",
  };

  const playBeep = () => {
    if (beepPlayTimes > 0) {
      audioRef.current.play();
      setBeepPlayTimes((prev) => prev - 1);
    } else {
      setTimeout(() => {
        setBeepPlayTimes(3);
      }, 1000);
    }
  };

  const whatIsTimeFor = () => {
    if (sessionTime < 0) {
      setIsSessionTime(false);
    } else if (breakTime < 0) {
      setIsSessionTime(true);
    }
  };

  const resetTime = () => {
    const sessionStateTime = state.session * 60;
    const breakStateTime = state.break * 60;

    if (sessionTime < 0) setSessionTime(sessionStateTime);
    if (breakTime < 0) setBreakTime(breakStateTime);
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
    const { minutes, seconds } = timeDestructurer(
      isSessionTime,
      sessionTime,
      breakTime
    );

    if (sessionTime === 0 || breakTime === 0) {
      playBeep();
    }

    setDisplayMin(minutes);
    setDisplaySec(seconds);
    whatIsTimeFor();
    resetTime();
  }, [sessionTime, breakTime, isSessionTime]);

  useEffect(() => {
    setSessionTime(state.session * 60);
    setBreakTime(state.break * 60);
  }, [state.session, state.break, isResetClicked]);

  return (
    <div className="timer-container" id="timer-label" style={style}>
      <audio src={beep} ref={audioRef} onEnded={playBeep} id="beep"></audio>
      <h2>{timeForWhat}</h2>
      <br />
      <div id="time-left">
        <h1>{displayTimeProperly(displayMin)}</h1>
        <h1>:</h1>
        <h1>{displayTimeProperly(displaySec)}</h1>
      </div>
    </div>
  );
};

export default Timer;
