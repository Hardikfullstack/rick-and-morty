import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CharacterDetail from '../component/character/CharacterDetail';
import {getCharacterDetail, setCharacterDetail, getEpisodeDetail, setCharacter} from '../redux/action';
import React from "react";
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('CharacterDetail', () => {

  it('handles details properly', async () => {
    const mockDispatch = jest.fn();

  const mockCharacter = {
    name: 'John Doe',
    image: 'example.jpg',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    episode: [{ name: 'Episode 1', id: '1' }],
    location: { name: 'Location 1', dimension: 'Dimension 1' },
  };

  const mockEpisode = {
    name: 'Episode 1',
    air_date: '2023-01-01',
    episode: 'S01E01',
  };

  const characterId = 'id';
  const setShowDetail = jest.fn();


    render(<Provider store={store}><CharacterDetail characterId={characterId} setShowDetail={setShowDetail} /></Provider>);

    await store.dispatch(setCharacterDetail(mockCharacter));

    await waitFor(() => {
      // Assert that the character detail is rendered correctly
      expect(screen.getByText(`${mockCharacter.name}`)).toBeInTheDocument();
      expect(screen.getByText(`${mockCharacter.species}`)).toBeInTheDocument();
      // ...add more assertions for other character details
    });

    // Trigger the handleDetails function
    await fireEvent.click(screen.getByTestId('go_back'));


  });
});









