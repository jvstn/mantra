import { useState } from 'react'
import styled from 'styled-components'
import { Mantra } from '../data/Mantra'

export const MantraBox = () => {
  const [currentMantra, setCurrentMantra] = useState('Generate New Mantra =>')
  const handleNewMantra = () => {
    const NewMantra = new Mantra()

    setCurrentMantra(NewMantra.create());

  }
  return (
    <MantraWrap>
      <p>{currentMantra}</p>
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
  height: 6vh;
  width: 6vh;
  margin-left: 2vh;
  margin-top: 1vh;
  border-radius: 10px;
  font-size: 10px;
`