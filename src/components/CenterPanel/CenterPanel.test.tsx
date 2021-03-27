import { fireEvent, render } from '@testing-library/react'
import {App} from '../../App'

describe('CenterPanel start button', () => {
  it('should change on press', () => {
    const { getByText } = render(<App />)
    
    expect(getByText(/Start/)).toBeInTheDocument()

    fireEvent.click(getByText(/Start/))

    expect(getByText(/Pause/)).toBeInTheDocument()
    
  })
})