import { useState } from 'react'
import styled from 'styled-components'
import { Mantra } from '../data/Mantra'
import { FaArrowRight } from 'react-icons/fa'
export const MantraBox = () => {
  const [currentMantra, setCurrentMantra] = useState('Generate New Mantra')
  const handleNewMantra = () => {
    const NewMantra = new Mantra()

    setCurrentMantra(NewMantra.create());

  }
  return (
    <MantraWrap>
      <MantraText>{currentMantra}</MantraText>
      {currentMantra === 'Generate New Mantra' &&
        <Arrow />}
      <RefreshButton onClick={handleNewMantra}>
        New
      </RefreshButton>
    </MantraWrap>
  )
}

const MantraWrap = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  
`

const RefreshButton = styled.button`
  height: 40px;
  width: 40px;
  margin-left: 3vh;
  margin-top: 1vh;
  font-size: 10px;
  border: 0;
  border-radius: 11px;
  background: #c5ebc3;
  box-shadow: 7px 7px 14px #a7c8a6, -7px -7px 14px #e3ffe0;
  cursor: pointer;
  &:focus {
    border: 0;
    outline: none;
  }
`;

const Arrow = styled(FaArrowRight)`
  align-self: center;
  margin-left: 1vh;
`

const MantraText = styled.p`
  text-align: center;
  max-width: 35vh;
`