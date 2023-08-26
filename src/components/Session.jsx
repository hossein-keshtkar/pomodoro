import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import "../styles/Session.css";

const Session = () => {
  const [isArrowUpHovered, setIsArrowUpHovered] = useState(false);
  const [isArrowDownHovered, setIsArrowDownHovered] = useState(false);

  const arrowUpSizeHandler = () => {
    setIsArrowUpHovered((prev) => !prev);
  };

  const arrowDownSizeHandler = () => {
    setIsArrowDownHovered((prev) => !prev);
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
          />
        </div>
        <h2 id="session-length">25</h2>
        <div id="session-decrement">
          <BiSolidDownArrow
            size={isArrowDownHovered ? 25 : 20}
            id="session-arrow-down"
            onMouseEnter={arrowDownSizeHandler}
            onMouseLeave={arrowDownSizeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Session;
