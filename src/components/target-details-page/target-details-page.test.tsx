import { render, screen } from '@testing-library/react';
import TargetDetailsPage from './target-details-page';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Target details page', () => {
  it('should render Target details correctly', () => {
    render(
      <BrowserRouter>
        <TargetDetailsPage/>
      </BrowserRouter>
    );

    expect(screen.getByText(/Donation target details/i)).toBeInTheDocument();
    expect(screen.getByText(/Back home/i)).toBeInTheDocument();
  });
})
