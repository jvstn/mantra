import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

interface ButtonGroupProps {
  setDuration: React.Dispatch<React.SetStateAction<number>>
}

export const ButtonGroup = ({ setDuration }: ButtonGroupProps) => {
  const handleClick = (e: any) => {
    setDuration(e.target.value)
  }

  return (
    <div>
      <ButtonWrap>
        <Button amountOfSeconds={15} onClick={handleClick} />
        <Button amountOfSeconds={30} onClick={handleClick} />
      </ButtonWrap>
      <ButtonWrap>
        <Button amountOfSeconds={60} onClick={handleClick} />
        <Button amountOfSeconds={120} onClick={handleClick} />
      </ButtonWrap>
    </div>
  )
}

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 0 50%;
  flex-wrap: wrap;
  padding-top: 3vh;


`