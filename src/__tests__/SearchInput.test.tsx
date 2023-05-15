import { render, fireEvent } from '@testing-library/react';
import SearchInput from '../component/character/SearchInput';

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
  const inputValue = 'John';

  fireEvent.input(searchInput, { target: { value: inputValue } });

  expect(handleNameQuery).toHaveBeenCalledTimes(1);
});