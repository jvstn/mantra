import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import { colors } from "../theme";
import { TimerRunning } from "../App";

interface TimerProps {
  duration: number;
  isActive: boolean;
}

type descriptor = 0 | "minutes" | "minute" | "seconds" | undefined;

export const Timer = ({ duration, isActive }: TimerProps) => {
  const { setTimerComplete, setElapsedTime } = useContext(TimerRunning);

  const renderTime = (
    remainingTime: number | undefined,
    elapsedTime: number | undefined,
    unit: descriptor
  ) => {
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

  const getTimeInMinutes = (time: number | undefined) =>
    time && (time > 60 ? time / 60 : time);

  const getDescriptor = (time: number | undefined) =>
    time && (time > 120 ? "minutes" : time > 60 ? "minute" : "seconds");

  return (
    <TimerWrap>
      <CountdownCircleTimer
        key={duration}
        isPlaying={isActive}
        duration={duration}
        size={150}
        colors={[[`${colors.secondaryLight}`, 1.0]]}
      >
        {({ remainingTime, elapsedTime }) => {
          return renderTime(
            getTimeInMinutes(remainingTime),
            elapsedTime,
            getDescriptor(remainingTime)
          );
        }}
      </CountdownCircleTimer>
    </TimerWrap>
  );
};

const Time = styled.p`
  color: ${colors.secondary};
  font-size: 1.5rem;
  text-align: center;
`;

const TimerWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
  margin-top: 5vh;
`;
