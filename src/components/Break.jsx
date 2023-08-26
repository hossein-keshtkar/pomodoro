import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import "../styles/Break.css";
import { BREAK } from "../constants/keywords";

const Break = ({ state, dispatch }) => {
  const [isArrowUpHovered, setIsArrowUpHovered] = useState(false);
  const [isArrowDownHovered, setIsArrowDownHovered] = useState(false);

  const arrowUpSizeHandler = () => {
    setIsArrowUpHovered((prev) => !prev);
  };

  const arrowDownSizeHandler = () => {
    setIsArrowDownHovered((prev) => !prev);
  };

  const incrementBreakTime = () => {
    if (state.break >= 60) return;
    dispatch({ type: BREAK, payload: state.break + 1 });
  };

  const decrementBreakTime = () => {
    if (state.break <= 0) return;
    dispatch({ type: BREAK, payload: state.break - 1 });
  };

  return (
    <div id="break-label">
      <h2>Break Length</h2>
      <div className="break-container">
        <div id="break-increment">
          <BiSolidUpArrow
            id="break-arrow-up"
            size={isArrowUpHovered ? 25 : 20}
            onMouseEnter={arrowUpSizeHandler}
            onMouseLeave={arrowUpSizeHandler}
            onClick={incrementBreakTime}
          />
        </div>
        <h2 id="break-length">{state.break}</h2>
        <div id="break-decrement">
          <BiSolidDownArrow
            size={isArrowDownHovered ? 25 : 20}
            id="break-arrow-down"
            onMouseEnter={arrowDownSizeHandler}
            onMouseLeave={arrowDownSizeHandler}
            onClick={decrementBreakTime}
          />
        </div>
      </div>
    </div>
  );
};

export default Break;
