import React from 'react';
import styled from 'styled-components'
import { RaisedCanvas } from './CenterPanel'
import { Heading } from './Heading';
interface SP_Props {
  elapsedTime: number;
}

export const SummaryPanel = ({elapsedTime}: SP_Props) => {

  return (
    <RaisedCanvas>
      <Heading />
      <div>{elapsedTime}</div>
    </RaisedCanvas>
  )
}