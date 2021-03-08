import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text?: string;
  amountOfSeconds?: number;
  onClick: any;
}

export const Button = ({ text,  amountOfSeconds, onClick }: ButtonProps) => {
  return (
    <StyledButton value={amountOfSeconds} onClick={onClick}>
      {amountOfSeconds &&
        `${amountOfSeconds > 30 ? amountOfSeconds / 60 : amountOfSeconds} ${
          amountOfSeconds < 60 ? "seconds" : amountOfSeconds === 120 ? "minutes" : "minute"
        }`}
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: 20px;
  height: 5vh;
  min-width: 15vh;
`;
