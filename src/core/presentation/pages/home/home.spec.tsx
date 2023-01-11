import { render, screen } from '@testing-library/react';
import HomePage from './home';

const makeSut = () => render(<HomePage />);

describe('Home page', () => {
  test('should render', () => {
    makeSut();
    const page = screen.getByRole('main', { name: 'Página inicial' });
    expect(page).toBeInTheDocument();
  });
});
