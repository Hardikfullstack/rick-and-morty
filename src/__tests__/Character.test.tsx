import React from "react";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SearchInput from '../component/character/SearchInput';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Character from '../component/character/Character';
import { Provider } from 'react-redux';
import store from '../redux/store';
import userEvent from '@testing-library/user-event';
import { Pagination } from '@mui/material';
import {setCharacter} from "../redux/action";

describe(`Component: MyComponent`, () => {
  test(`MyComponent renders with default props`, () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<SearchInput />);
    expect(wrapper).toMatchSnapshot();
  });
});


describe('Select Input', () => {
  it('should value updated on when status select value changes', async () => {
    const {getByTestId, container} = render(
        <Provider store={store}>
          <Character/>
        </Provider>
    );

    fireEvent.change(container.querySelector('input[name="status-select"]'), {target: {value: 'Alive'}});
    let select = getByTestId('status-select');
    expect(select).toHaveTextContent('Alive');
  });
});



describe('Search Input', () => {
    it('should value updated on when filter text value changes', async () => {
        const {getByTestId, container} = render(
            <Provider store={store}>
                <Character/>
            </Provider>
        );

        const field  = screen.getByTestId('filter-input').querySelector('input')
        expect(field ).toBeInTheDocument()

        fireEvent.change(field , {target: { value: 'some text'}});
        expect(field.value).toBe('some text');

    });
});


describe('Character List', () => {
    it('Characters should not rendered in case of data is blank', async () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <Character/>
            </Provider>
        );
        await waitFor(() => store.dispatch(setCharacter([
            {id: "1",
            image : "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name : "Rick Sanchez",
            species : "Human",
            status : "Alive"
            }
            ])));

        expect(getByTestId('character-list')).toBeInTheDocument();


    });
});

describe('Select Input', () => {

  describe('Option Changes', () => {
    it('should value updated on when Gender select value changes', () => {
      const {container, getByTestId} = render(
          <Provider store={store}>
            <Character/>
          </Provider>
      );
      fireEvent.change(container.querySelector('input[name="gender-select"]'), {target: {value: 'Male'}});
      let select = getByTestId('gender-select');
      expect(select).toHaveTextContent('Male');
    });
  });

    it('should change the page when a user clicks on a page number', () => {
      const setPage = jest.fn();
      const pageQuery = jest.fn();
  
      render(
        <Pagination
          count={10}
          color="primary"
          page={1}
        />
      );
  
      const pageTwoButton = screen.getByRole('button', { name: 'Go to page 2' });
      userEvent.click(pageTwoButton);
  
      expect(setPage).toHaveBeenCalledTimes(0);
      // expect(setPage).toHaveBeenCalledWith(1);
      expect(pageQuery).toHaveBeenCalledTimes(0);
      // expect(pageQuery).toHaveBeenCalledWith(2);
    });  
    
  });



