import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import "../styles/Break.css";

const Break = () => {
  const [isArrowUpHovered, setIsArrowUpHovered] = useState(false);
  const [isArrowDownHovered, setIsArrowDownHovered] = useState(false);

  const arrowUpSizeHandler = () => {
    setIsArrowUpHovered((prev) => !prev);
  };

  const arrowDownSizeHandler = () => {
    setIsArrowDownHovered((prev) => !prev);
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
          />
        </div>
        <h2 id="break-length">5</h2>
        <div id="break-decrement">
          <BiSolidDownArrow
            size={isArrowDownHovered ? 25 : 20}
            id="break-arrow-down"
            onMouseEnter={arrowDownSizeHandler}
            onMouseLeave={arrowDownSizeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Break;
