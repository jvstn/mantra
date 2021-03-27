import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import { colors } from "../../theme";
import { DisplayTime } from "./DisplayTime";

interface TimerProps {
  duration: number;
  isActive: boolean;
}


export const Timer = ({ duration, isActive }: TimerProps) => {
  

  const getTimeInMinutes = (time: number | undefined) =>
    time && (time > 60 ? time / 60 : time);

  const getDescriptor = (time: number | undefined) =>
    time && (time >= 120 ? "minutes" : time > 60 ? "minute" : "seconds");

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
          return (
            <DisplayTime
              remainingTime={getTimeInMinutes(remainingTime)}
              elapsedTime={elapsedTime}
              unit={getDescriptor(remainingTime)}
            />
          );
        }}
      </CountdownCircleTimer>
    </TimerWrap>
  );
};


const TimerWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
  margin-top: 5vh;
`;
