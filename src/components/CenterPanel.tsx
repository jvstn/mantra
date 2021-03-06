import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../theme";
import { Heading } from "./Heading";

interface CenterPanelProps {}

export const CenterPanel = () => {
  return (
    <RaisedCanvas>
      <Heading />
    </RaisedCanvas>
  );
};

const RaisedCanvas = styled.div`
  background-color: #c5ebc3;
  height: 80vh;
  width: 50vh;
  border-radius: 20px;
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.12), 2px 4px 2px rgba(0, 0, 0, 0.12),
    6px 4px 4px rgba(0, 0, 0, 0.12), 12px 8px 8px rgba(0, 0, 0, 0.12),
    12px 16px 16px rgba(0, 0, 0, 0.12);
  margin-left: auto;
  margin-right: auto;
`;
