import { fireEvent, render } from '@testing-library/react'
import { MantraBox } from './'


describe('MantraBox', () => {
  it('should show generic test', () => {
    const { getByText } = render(<MantraBox />)

    expect(getByText(/Generate/)).toBeInTheDocument()
  })

  it('should change text after click', () => {
    const { queryByText, getByRole } = render(<MantraBox />)

    fireEvent.click(getByRole('button'))

    expect(queryByText(/Generate/)).toBeNull()
  })
  
  

})