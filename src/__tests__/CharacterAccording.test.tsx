import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CharacterAccording from "../component/character/CharacterAccording";

describe('Character According Component', () => {
  it('renders episode details correctly when episode is clicked', () => {
    const episodeQuery = jest.fn();
    const characterDetail = {
      episode: [
        { name: 'rick' },
        { name: 'morty' },
        { name: 'dan' },
      ],
    };
    const episodeDetail = [
      { name: 'Episode 1', air_date: '2023-05-01', episode: 'S01E01' },
      { name: 'Episode 2', air_date: '2023-05-08', episode: 'S01E02' },
    ];
    render(
      <CharacterAccording
        characterDetail={characterDetail}
        episodeDetail={episodeDetail}
        episodeQuery={episodeQuery}
      />
    );
    const episodeNames = screen.getAllByRole('button', { name: /rick/ });
    fireEvent.click(episodeNames[0]); // Click on the first episode
    expect(episodeQuery).toBeCalled();
  });
});


describe('Character According Component', () => {
  it('renders Character and Episode details correctly', () => {
    const episodeQuery = jest.fn();
    const characterDetail = {
      episode: [
        { name: 'Episode 1' },
        { name: 'Episode 2' },
        { name: 'Episode 3' },
      ],
    };
    const episodeDetail = [
      { name: 'Episode 1', air_date: '2023-05-01', episode: 'S01E01' },
      { name: 'Episode 2', air_date: '2023-05-08', episode: 'S01E02' },
    ];
    render(
      <CharacterAccording
        characterDetail={characterDetail}
        episodeDetail={episodeDetail}
        episodeQuery={episodeQuery}
      />
    );

    expect(screen.getByText('2023-05-01')).toBeInTheDocument();
    expect(screen.getByText('S01E01')).toBeInTheDocument();
    expect(screen.getByText('Episode 1')).toBeInTheDocument();
    expect(screen.getByText('Episode 2')).toBeInTheDocument();
    expect(screen.getByText('Episode 3')).toBeInTheDocument();
    expect(screen.getByText('2023-05-08')).toBeInTheDocument();
    expect(screen.getByText('S01E02')).toBeInTheDocument();
  });
});









