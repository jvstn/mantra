import React, { useContext } from "react";
import styled from "styled-components";
import { TimerRunning } from "../../App";
import { colors } from "../../theme";

interface DT_Props {
  remainingTime: number | undefined;
  elapsedTime: number | undefined;
  unit: descriptor;
}

type descriptor = 0 | "minutes" | "minute" | "seconds" | undefined;

export const DisplayTime = ({ remainingTime, elapsedTime, unit }: DT_Props) => {
  const { setTimerComplete, setElapsedTime } = useContext(TimerRunning);

  elapsedTime && setElapsedTime(Math.floor(elapsedTime));
  if (remainingTime === 0) {
    setTimerComplete(true);
  }
  return (
    <div>
      <Time>
        {remainingTime && Math.floor(remainingTime)} <br /> {unit}
      </Time>
    </div>
  );
};

const Time = styled.p`
  color: ${colors.secondary};
  font-size: 1.5rem;
  text-align: center;
`;
