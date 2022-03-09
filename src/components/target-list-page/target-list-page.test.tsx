import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TargetListPage from './target-list-page';

describe('Component: Target list page', () => {
  it('should render Target list page correctly', () => {
    render(
      <BrowserRouter>
        <TargetListPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/Donation targets/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Home/i)).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
