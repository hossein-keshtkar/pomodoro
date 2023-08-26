import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import "../styles/Session.css";
import { SESSION } from "../constants/keywords";

const Session = ({ state, dispatch }) => {
  const [isArrowUpHovered, setIsArrowUpHovered] = useState(false);
  const [isArrowDownHovered, setIsArrowDownHovered] = useState(false);

  const arrowUpSizeHandler = () => {
    setIsArrowUpHovered((prev) => !prev);
  };

  const arrowDownSizeHandler = () => {
    setIsArrowDownHovered((prev) => !prev);
  };

  const sessionIncrementHandler = () => {
    if (state.session >= 60) return;
    dispatch({ type: SESSION, payload: state.session + 1 });
  };
  const sessionDecrementHandler = () => {
    if (state.session <= 0) return;
    dispatch({ type: SESSION, payload: state.session - 1 });
  };

  return (
    <div id="session-label">
      <h2>Session Lenght</h2>
      <div className="session-container">
        <div id="session-increment">
          <BiSolidUpArrow
            id="session-arrow-up"
            size={isArrowUpHovered ? 25 : 20}
            onMouseEnter={arrowUpSizeHandler}
            onMouseLeave={arrowUpSizeHandler}
            onClick={sessionIncrementHandler}
          />
        </div>
        <h2 id="session-length">{state.session}</h2>
        <div id="session-decrement">
          <BiSolidDownArrow
            size={isArrowDownHovered ? 25 : 20}
            id="session-arrow-down"
            onMouseEnter={arrowDownSizeHandler}
            onMouseLeave={arrowDownSizeHandler}
            onClick={sessionDecrementHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Session;
