import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import { colors } from "../theme";

interface TimerProps {
  duration: number;
  isActive: boolean;
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
  setTimerComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Timer = ({
  duration,
  setElapsedTime,
  setTimerComplete,
  isActive
}: TimerProps) => {
  const renderTime = (
    remainingTime: number,
    elapsedTime: number,
    unit: string
  ) => {
    setElapsedTime(Math.floor(elapsedTime));
    if (remainingTime === 0) {
      setTimerComplete(true);
    }
    return (
      <div>
        <Time>
          {Math.floor(remainingTime)} <br /> {unit}
        </Time>
      </div>
    );
  };

  const getTimeInMinutes = (time: number) => (time > 60 ? time / 60 : time);

  const getDescriptor = (time: number) =>
    time > 120 ? "minutes" : time > 60 ? "minute" : "seconds";

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
