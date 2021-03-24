import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { CenterPanel } from "./components/CenterPanel";
import { SummaryPanel } from "./components/SummaryPanel";

export const TimerRunning = createContext<any>(null);

export const App = () => {
  const [timerComplete, setTimerComplete] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0)

  const timeActions = { setTimerComplete, setElapsedTime}

  return (
    <div>
      
      {!timerComplete && (
        <TimerRunning.Provider value={timeActions}>
          <CenterPanel />
        </TimerRunning.Provider>
      )}

      {timerComplete && <SummaryPanel elapsedTime={elapsedTime} />}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
