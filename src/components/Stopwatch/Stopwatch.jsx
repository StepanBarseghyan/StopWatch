import React, { useState, useEffect, useRef } from "react";
import NumContainer from "../NumContainer/NumContainer";
import {
  MdOutlinePlayCircleFilled,
  MdStopCircle,
  MdOutlinePauseCircleFilled,
} from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import "./Stopwatch.css";

const Stopwatch = ({ timeLaps, setTimeLaps }) => {
  const [time, setTime] = useState({
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setTime((prevTime) => ({
          milliseconds: (prevTime.milliseconds + 1) % 100,
          seconds:
            (prevTime.seconds + (prevTime.milliseconds === 99 ? 1 : 0)) % 60,
          minutes:
            (prevTime.minutes +
              (prevTime.seconds === 59 && prevTime.milliseconds === 99
                ? 1
                : 0)) %
            60,
          hours:
            prevTime.hours +
            (prevTime.minutes === 59 &&
            prevTime.seconds === 59 &&
            prevTime.milliseconds === 99
              ? 1
              : 0),
        }));
      }, 10);
    }

    return () => clearInterval(timer.current);
  }, [isRunning]);

  function startTimer() {
    setIsRunning((prev) => !prev);
  }
  function resetTimer() {
    clearInterval(timer.current);
    setTimeLaps([]);
    setIsRunning(false);
    setTime({
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
  }
  function setTimeLap() {
    const timeLap = {
      milliseconds: time.milliseconds,
      seconds: time.seconds,
      minutes: time.minutes,
      hours: time.hours,
    };
    setTimeLaps([...timeLaps, timeLap]);
  }
  return (
    <div className="timer__body">
      <div className="timer__center">
        <div className="timer">
          <NumContainer
            num={time.hours}
            time={"hours"}
            isRunning={time.minutes === 59 && isRunning}
          />
          <NumContainer
            num={time.minutes}
            time={"minutes"}
            isRunning={time.seconds === 59 && isRunning}
          />
          <NumContainer
            num={time.seconds}
            time={"seconds"}
            isRunning={time.seconds <= 59 && isRunning}
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={startTimer} className={isRunning ? "clicked" : ""}>
          {isRunning ? (
            <MdOutlinePauseCircleFilled />
          ) : (
            <MdOutlinePlayCircleFilled />
          )}
        </button>
        <button onClick={resetTimer}>
          <MdStopCircle />
        </button>
        <button onClick={setTimeLap} disabled={isRunning ? false : true}>
          <RxLapTimer />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
