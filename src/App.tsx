import { createContext, useState } from "react";
import "./App.css";
import { CenterPanel } from "./components/CenterPanel/";
import { SummaryPanel } from "./components/SummaryPanel/index";
import BellSound from './assets/bell.wav'

export const TimerRunning = createContext<any>(null);

export const App = () => {
  const [timerComplete, setTimerComplete] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0)

  const timeActions = { setTimerComplete, setElapsedTime }
  
  let bell = new Audio(BellSound)

  if (timerComplete) bell.play()

  return (
    <div>
      
      {!timerComplete && (
        <TimerRunning.Provider value={timeActions}>
          <CenterPanel />
        </TimerRunning.Provider>
      )}

      {timerComplete &&
        <SummaryPanel elapsedTime={elapsedTime} />
      }
    </div>
  );
};

