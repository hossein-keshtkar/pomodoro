import React, { useState } from "react";
import { PiPlayPauseFill, PiRepeatBold } from "react-icons/pi";

import "../styles/Button.css";

const Buttons = () => {
  const [isResetHovered, setIsResetHovered] = useState(false);
  const [isStartHovered, setIsStartHovered] = useState(false);

  const startHoverHandler = () => {
    setIsStartHovered((prev) => !prev);
  };
  const resetHoverHandler = () => {
    setIsResetHovered((prev) => !prev);
  };

  return (
    <div className="btn-container">
      <div>
        <PiPlayPauseFill
          id="start-stop"
          size={isStartHovered ? 35 : 30}
          onMouseEnter={startHoverHandler}
          onMouseLeave={startHoverHandler}
        />
      </div>
      <div>
        <PiRepeatBold
          id="reset"
          size={isResetHovered ? 35 : 30}
          onMouseEnter={resetHoverHandler}
          onMouseLeave={resetHoverHandler}
        />
      </div>
    </div>
  );
};

export default Buttons;