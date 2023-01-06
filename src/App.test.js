import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

https://www.figma.com/proto/huy10ZW73MT6MF1IqeR7Zh/Data-intelligence-CT?page-id=0%3A1&node-id=1345%3A5952&viewport=-956%2C-6672%2C0.45&scaling=contain&starting-point-node-id=790%3A1310