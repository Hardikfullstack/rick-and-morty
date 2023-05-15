import { render, fireEvent } from '@testing-library/react';
import SearchInput from '../component/character/SearchInput';
import userEvent from "@testing-library/user-event/dist";

it('renders the search input component', () => {
  const handleNameQuery = jest.fn();
  const { getByPlaceholderText } = render(<SearchInput handleNameQuery={handleNameQuery} />);
  const searchInput = getByPlaceholderText('Search Character...');
  expect(searchInput).toBeInTheDocument();
});

it('calls handleNameQuery when input value changes', () => {
  const handleNameQuery = jest.fn();
  const { getByPlaceholderText } = render(<SearchInput handleNameQuery={handleNameQuery} />);
  const searchInput = getByPlaceholderText('Search Character...');

  userEvent.type(searchInput, 'J');

  expect(handleNameQuery).toHaveBeenCalledTimes(1);
  expect(handleNameQuery).toHaveBeenCalledWith("name", "J");
});