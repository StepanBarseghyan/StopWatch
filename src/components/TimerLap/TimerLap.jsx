import React from "react";

const TimerLap = ({
  timeLap: { hours, minutes, seconds, milliseconds },
  currentIndex,
}) => {
  return (
    <tr>
      <td>Lap {currentIndex}</td>
      <td>{`${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}.${milliseconds}`}</td>
    </tr>
  );
};

export default TimerLap;
