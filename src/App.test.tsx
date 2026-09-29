import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Pages/Home';

test('renderiza o título principal da home', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/advocacia estratégica/i);
});
