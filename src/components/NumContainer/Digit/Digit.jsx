import React, { useEffect, useState, useRef } from "react";
import "./Digit.css";

const Digit = ({ number, isRunning, isTensDigit }) => {
  let maxNumber = isTensDigit ? 5 : 9;
  return (
    <div className="container">
      <div className="top">
        <div className={`frontPage ${isRunning ? "flipTop" : ""}`}>
          <span>{+number}</span>
        </div>
        <div className={`backPage ${isRunning ? "flipBottom" : ""}`}>
          <span>{+number < maxNumber ? +number + 1 : 0}</span>
        </div>
      </div>

      <div className="back">
        <div className="back_top">
          <span>{+number < maxNumber ? +number + 1 : 0}</span>
        </div>
        <div className="back_bottom">
          <span>{+number}</span>
        </div>
      </div>
    </div>
  );
};

export default Digit;
