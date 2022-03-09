import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TargetList from './target-list';

const mockTargets = [
  {
    giftTargetId: 1101893608839,
    name: "Suurin tarve",
    type: "Kohde",
    paymentCode: "1111 31004"
  },
  {
    giftTargetId: 1138330933784,
    name: "Demo alakohde - kanava 3: landing page 1",
    type: "Kohde",
    paymentCode: "3333 32005"
  },
  {
    giftTargetId: 1551830505431,
    name: "Aineeton lahja 2",
    type: "Aineeton-lahja",
    paymentCode: "22253"
  }];

describe('Component: Target list', () => {
  it('should render Target list correctly', () => {
    render(
      <BrowserRouter>
        <TargetList targets={mockTargets}/>
      </BrowserRouter>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText(/Suurin tarve/i)).toBeInTheDocument();
    expect(screen.getByText(/Demo alakohde/i)).toBeInTheDocument();
  });
});
