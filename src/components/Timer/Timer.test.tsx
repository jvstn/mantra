import { fireEvent, render } from '@testing-library/react'
import {App} from '../../App'


describe('After button click', () => {

  it('should have two occurrences of "15"', () => {
    const { getAllByText, getByText } = render(<App />)

    fireEvent.click((getByText(/15 seconds/)))
    
    expect(getAllByText(/15 seconds/).length).toEqual(2);
  })
  
  it('should have two occurrences of "30"', () => {
    const { getAllByText, getByText } = render(<App />)

    fireEvent.click((getByText(/30 seconds/)))
    
    expect(getAllByText(/30 seconds/).length).toEqual(2);
  })
  it('should have two occurrences of "2 minutes"', () => {
    const { getAllByText, getByText } = render(<App />)

    fireEvent.click(getByText(/2 minutes/));
    
    expect(getAllByText(/2 minutes/).length).toEqual(2);
  })

  it('starts with two occurrences of "1 minute"', () => {
    const { getAllByText } = render(<App />);

    expect(getAllByText(/1 minute/).length).toEqual(2);
  });


})