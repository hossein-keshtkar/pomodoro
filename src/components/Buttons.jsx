import React, { useState } from "react";
import { PiPlayPauseFill, PiRepeatBold } from "react-icons/pi";

import "../styles/Button.css";
import { BREAK, RUN, SESSION } from "../constants/keywords";

const Buttons = ({ state, dispatch }) => {
  const [isResetHovered, setIsResetHovered] = useState(false);
  const [isStartHovered, setIsStartHovered] = useState(false);

  const startHoverHandler = () => {
    setIsStartHovered((prev) => !prev);
  };
  const resetHoverHandler = () => {
    setIsResetHovered((prev) => !prev);
  };

  const stopStartHandler = () => {
    dispatch({ type: RUN, payload: !state.isRunnig });
  };

  const resetHandler = () => {
    dispatch({ type: RUN, payload: false });
    dispatch({ type: SESSION, payload: 25 });
    dispatch({ type: BREAK, payload: 5 });
  };

  return (
    <div className="btn-container">
      <div>
        <PiPlayPauseFill
          id="start-stop"
          size={isStartHovered ? 35 : 30}
          onMouseEnter={startHoverHandler}
          onMouseLeave={startHoverHandler}
          onClick={stopStartHandler}
        />
      </div>
      <div>
        <PiRepeatBold
          id="reset"
          size={isResetHovered ? 35 : 30}
          onMouseEnter={resetHoverHandler}
          onMouseLeave={resetHoverHandler}
          onClick={resetHandler}
        />
      </div>
    </div>
  );
};

export default Buttons;
