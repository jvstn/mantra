import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'
import LogoPic from '../assets/logo.png'

export const Heading = () => {

  return (
    <HeadingWrap>
      <Title>Mantra</Title>
      <Logo src={LogoPic} />
    </HeadingWrap>
  );
}


const Title = styled.h2`
  color: ${colors.secondary};
  font-size: 32px;
  font-weight: 900;
  margin-top: 7%;
`;

const Logo = styled.img`
  height: 15vh;
  width: 15vh;
  margin-bottom: 5vh;
`

const HeadingWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: -10vh;
`