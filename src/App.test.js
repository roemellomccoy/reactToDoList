import { render, screen } from '@testing-library/react';
import Username from './App';
import ToDoList from './taskList';

test('renders learn react link', () => {
  render(<Username />);
  render(<ToDoList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
