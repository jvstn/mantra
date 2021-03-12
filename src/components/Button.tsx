import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

interface ButtonProps {
  text?: string;
  amountOfSeconds?: number;
  onClick?: any;
}

export const Button = ({ text, amountOfSeconds, onClick }: ButtonProps) => {
  return (
    <StyledButton value={amountOfSeconds} onClick={onClick}>
      {amountOfSeconds &&
        `${amountOfSeconds > 30 ? amountOfSeconds / 60 : amountOfSeconds} ${
          amountOfSeconds < 60
            ? "seconds"
            : amountOfSeconds === 120
            ? "minutes"
            : "minute"
        }`}
      {text}
    </StyledButton>
  );
};

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
