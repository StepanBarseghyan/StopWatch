import React, { useState, useEffect, useRef, memo } from "react";
import "./NumContainer.css";
import Digit from "./Digit/Digit";

const NumContainer = ({ num, time, isRunning }) => {
  const tensDigit = Math.floor(num / 10);
  const onesDigit = num % 10;

  return (
    <div className="main">
      <div className="numbers">
        <Digit
          isTensDigit={true}
          number={tensDigit}
          key={time + tensDigit + "1"}
          isRunning={onesDigit === 9 && isRunning}
        />
        <Digit
          number={onesDigit}
          key={time + onesDigit + "2"}
          isRunning={onesDigit <= 9 && isRunning}
        />
      </div>
      <h2>{time}</h2>
    </div>
  );
};

export default memo(NumContainer);
