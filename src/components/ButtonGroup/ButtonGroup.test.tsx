import { render, screen } from '@testing-library/react'
import { ButtonGroup } from '.'
import React from 'react';




describe('Button Group is in position', () => {
  const setDuration =  jest.fn().mockReturnValue([60.1, {}])
  it('should render 15 button', () => {
    render(<ButtonGroup setDuration={setDuration} />)
    expect(screen.getByText('15 seconds')).toBeInTheDocument()
  })
  
  it('should render 30 button', () => {
    render(<ButtonGroup setDuration={setDuration} />)
    expect(screen.getByText('30 seconds')).toBeInTheDocument()
  })
  it('should render 1 minute button', () => {
    render(<ButtonGroup setDuration={setDuration} />)
    expect(screen.getByText('1 minute')).toBeInTheDocument()
  })
  it('should render 2 minutes button', () => {
    render(<ButtonGroup setDuration={setDuration} />)
    expect(screen.getByText('2 minutes')).toBeInTheDocument()
  })

})