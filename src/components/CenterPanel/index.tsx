import  { useState } from "react";
import styled from "styled-components";
import { MantraBox } from '../MantraBox'
import Button  from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { Heading } from "../Heading";
import { Timer } from "../Timer";


export const CenterPanel = () => {
  const [duration, setDuration] = useState(60.1);
  const [isActive, setIsActive] = useState(false);

  

  const toggleActive = () => setIsActive(!isActive);
  return (
    <RaisedCanvas>
      <Heading />
      <MantraBox />
      <ButtonGroup setDuration={setDuration} />
      <Timer
        duration={duration}
        isActive={isActive}
      />
      <StartWrap>
        
        <Button text={!isActive ? "Start" : "Pause"} onClick={toggleActive} />
      </StartWrap>
    </RaisedCanvas>
  );
};

export const RaisedCanvas = styled.div`
  background-color: #c5ebc3;
  height: 80vh;
  width: 50vh;
  border-radius: 20px;
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.12), 2px 4px 2px rgba(0, 0, 0, 0.12),
    6px 4px 4px rgba(0, 0, 0, 0.12), 12px 8px 8px rgba(0, 0, 0, 0.12),
    12px 16px 16px rgba(0, 0, 0, 0.12);
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 760px) {
    height: 100vh;
    width: 100%;
    border-radius: 10px;
    margin-top: 0;

  }
`;

const StartWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
