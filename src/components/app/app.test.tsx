import {render, screen, waitFor} from '@testing-library/react';
import { AppRoute } from '../../const';
import App from './app';
import { MemoryRouter } from 'react-router-dom';

describe('Application Routing', () => {
  it(`should render Target list page when user navigate to '/'`, async () => {
    const fakeApp = (
      <MemoryRouter initialEntries={[AppRoute.Root]}>
        <App />
      </MemoryRouter>);

    render(fakeApp);
    await waitFor(() => {
      expect(screen.getByText(/Donation targets/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });
  });

  it(`should render Target details page when user navigate to 'targets/1101893608839'`, async () => {
    const fakeApp = (
      <MemoryRouter initialEntries={[`${AppRoute.Targets}/1101893608839`]}>
        <App />
      </MemoryRouter>);
    render(fakeApp);

    await waitFor(() => {
      expect(screen.getByText(/Donation target details/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Back home/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/1101893608839/)).toBeInTheDocument();
    });
  });

  it(`should render Not found page when user navigate to 'targets/1101'`, async () => {
    const fakeApp = (
      <MemoryRouter initialEntries={[`${AppRoute.Targets}/1101`]}>
        <App/>
      </MemoryRouter>);

    render(fakeApp);

    await waitFor(() => {
      expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/Ups... Something went wrong/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/Back home/i)).toBeInTheDocument();
    });
  });
})
