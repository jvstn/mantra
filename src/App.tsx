import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { CenterPanel } from "./components/CenterPanel";
import { SummaryPanel } from "./components/SummaryPanel";

export const App = () => {
  const [timerComplete, setTimerComplete] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  return (
    <>
      {console.log(timerComplete)
      }
      {!timerComplete && (
        <CenterPanel
          setTimerComplete={setTimerComplete}
          setElapsedTime={setElapsedTime}
          elapsedTime={elapsedTime}
        />
      )}

      {timerComplete && <SummaryPanel elapsedTime={elapsedTime} />}
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
