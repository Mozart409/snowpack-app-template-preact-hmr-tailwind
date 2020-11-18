import { h } from 'preact';
import { render } from '@testing-library/preact';
import App from './App';

test('renders Snowpack text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Snowpack/i);
  expect(textElement).toBeInTheDocument();
});

test('renders preact text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Preact/i);
  expect(textElement).toBeInTheDocument();
});
