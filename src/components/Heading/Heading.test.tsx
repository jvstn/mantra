import {  render } from '@testing-library/react'
import { Heading } from '.'


describe('Heading', () => {
  it('should render and show logo', () => {
    const { getByText, getByRole } = render(<Heading />)

    expect(getByText(/Mantra/)).toBeInTheDocument()
    expect(getByRole('img')).toBeInTheDocument()
  })
})