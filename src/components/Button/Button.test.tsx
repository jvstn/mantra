import {render, screen} from '@testing-library/react'
import Button from './index'


describe('Button descriptors', () => {
  it('should display "seconds" if time under 60', () => {
    render(<Button amountOfSeconds={35}  />)
    expect(screen.getByText('35 seconds')).toBeInTheDocument()
  })

  it('should display "minute" if time equals 60', () => {
    render(<Button amountOfSeconds={60}  />)
    expect(screen.getByText('1 minute')).toBeInTheDocument()
  })
  
  it('should display "minutes" if time is greater 60', () => {
    render(<Button amountOfSeconds={120}  />)
    expect(screen.getByText('2 minutes')).toBeInTheDocument()
  })
  
  it('should display text', () => {
    render(<Button text={'This should display'}  />)
    expect(screen.getByText(/This should display/)).toBeInTheDocument()
  })



  
})
