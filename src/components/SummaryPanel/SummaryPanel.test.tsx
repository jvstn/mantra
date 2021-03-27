import { render } from "@testing-library/react";
import { SummaryPanel } from "./";

describe("SummaryPanel", () => {
  it('should render "Share" button', () => {
    const { getByText } = render(<SummaryPanel elapsedTime={15} />);

    expect(getByText(/Share/)).toBeInTheDocument();
  });

  it('should render "New Session" button', () => {
    const { getByText } = render(<SummaryPanel elapsedTime={15} />);

    expect(getByText(/New Session/)).toBeInTheDocument();
  });

  it('should render elapsed time', () => {
    const { getByText } = render(<SummaryPanel elapsedTime={15} />);

    expect(getByText(/15/)).toBeInTheDocument();
  });

});
