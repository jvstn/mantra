import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";

interface ButtonProps {
  text?: string;
  amountOfSeconds?: number;
  onClick?: any;
}

export default function Button({
  text,
  amountOfSeconds,
  onClick,
}: ButtonProps) {
  const getNumberToDisplay = (amount: number) =>
    amount > 59 ? amount / 60 : amount;

  const getUnitToDisplay = (amount: number) =>
    amount < 60 ? "seconds" : amount === 120 ? "minutes" : "minute";

  return (
    <StyledButton value={amountOfSeconds} onClick={onClick}>
      {amountOfSeconds &&
        `${getNumberToDisplay(amountOfSeconds)} 
        ${getUnitToDisplay(amountOfSeconds)}`}
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border-radius: 20px;
  background: ${colors.secondaryBackground};
  box-shadow: 4px 4px 8px #a7c8a6, -4px -4px 8px #e3ffe0;
  height: 5vh;
  min-width: 15vh;
  border: 0;
  cursor: pointer;

  &:focus {
    border: 0;
    outline: none;
  }
`;
