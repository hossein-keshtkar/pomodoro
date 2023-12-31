import React, { useContext, useState } from "react";
import { PiPlayPauseFill, PiRepeatBold } from "react-icons/pi";

import "../styles/Button.css";
import { BREAK, RUN, SESSION } from "../constants/keywords";
import { initState } from "../data/initState";
import Context from "../manager/Context";

const Buttons = ({ state, dispatch }) => {
  const [isResetHovered, setIsResetHovered] = useState(false);
  const [isStartHovered, setIsStartHovered] = useState(false);

  const { setIsResetClicked } = useContext(Context);

  const startHoverHandler = () => {
    setIsStartHovered((prev) => !prev);
  };
  const resetHoverHandler = () => {
    setIsResetHovered((prev) => !prev);
  };

  const stopStartHandler = () => {
    dispatch({ type: RUN, payload: !state.isRunning });
  };

  const resetHandler = () => {
    dispatch({ type: RUN, payload: initState.isRunning });
    dispatch({ type: SESSION, payload: initState.session });
    dispatch({ type: BREAK, payload: initState.break });
    setIsResetClicked((prev) => !prev);
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
