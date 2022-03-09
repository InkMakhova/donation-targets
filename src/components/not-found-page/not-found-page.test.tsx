import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './not-found-page';

describe('Component: Not found page', () => {
  it('should render Not found page correctly', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Ups... Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/Back home/i)).toBeInTheDocument();
  });
});
