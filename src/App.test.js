import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const galleryContainer = screen.getByTestId('galleryContainer');
  expect(galleryContainer).toBeInTheDocument();
});
