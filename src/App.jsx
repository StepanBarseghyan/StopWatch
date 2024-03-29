import React, { useState } from "react";
import TimerLap from "./components/TimerLap/TimerLap";
import Stopwatch from "./components/Stopwatch/Stopwatch";

const App = () => {
  const [timeLaps, setTimeLaps] = useState([]);

  return (
    <>
      <Stopwatch timeLaps={timeLaps} setTimeLaps={setTimeLaps} />
      {timeLaps.length ? (
        <div class="table-container">
          <table className="laps">
            <thead>
              <tr>
                <th>Lap</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {timeLaps?.map((lap, i) => (
                <TimerLap timeLap={lap} key={i} currentIndex={i + 1} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
