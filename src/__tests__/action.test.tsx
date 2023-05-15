import { waitFor } from "@testing-library/react"
import { clearCharacter, getCharacter, getCharacterDetail, getEpisodeDetail, setCharacter, setCharacterDetail, setEpisodeDetail } from "../redux/action";
import reducers, { initialState } from "../redux/reducer";
import {mockCharacterData, mockCharacterDetail, mockEpisodeDetail} from "../mock/mockData";

// Get Character
describe('Get Character', () => {
    it('properly captures a dispatch to change get character state', () => {
      expect(reducers(initialState, getCharacter(true)))
        .toEqual({
          allCharacters: [],
          character: {},
          loading: false
    });
    });
    it('properly captures a data received from API for list of character', async () => {
        const graphqlQuery = {
            operationName: "characters",
            query: `
                query characters($page : Int!){
                characters(page: $page) {
                    info {
                        count
                    }
                    results {
                        name
                        image
                        species
                        id
                        status
                    }
                }
            }`,
            variables: { page: 1 },
        };
        expect(reducers(initialState, await waitFor(() => getCharacter(graphqlQuery, (data) => setCharacter(data))))).toEqual({
            allCharacters: mockCharacterData,
            character: {},
            loading: false,
        });
    });
   })

// Set Character   
describe('Set Character', () => {
    it('properly captures a dispatch to change set character state', () => {
      expect(reducers(initialState, setCharacter([{data: "dummy"}]))).toEqual({
          allCharacters: [{data: "dummy"}],
          character: {},
          loading: false,
        });
    });
   })

// Set Character Detail   
describe('Set Character Detail', () => {
    it('properly captures a dispatch to change set character detail state', () => {
      expect(reducers(initialState, setCharacterDetail({name: "dummy"}))).toEqual({
          allCharacters: [],
          character: {name: "dummy"},
          loading: false,
        });
    });
   })

// Get Character Detail   
describe('Get Character Detail', () => {
    it('properly captures a dispatch to change get character detail state', () => {
      expect(reducers(initialState, getCharacterDetail(true))).toEqual({
          allCharacters: [],
          character: {},
          loading: false
        });
    });
    it('properly captures a data received from API for one character', async () => {
        const graphqlQuery = {
            query: `
                query getCharacterDetail($id: ID!) {
                character(id: $id) {
                  name
                  image
                  species
                  gender
                  status
                  episode {
                    name
                    id
                  }
                  location {
                    name
                    dimension
                  }
                }
              }`,
            variables: {
                id: "2",
            },
        };
        expect(reducers(initialState, await waitFor(() => getCharacterDetail(graphqlQuery, (data) => setCharacterDetail(data))))).toEqual({
            allCharacters: [],
            character: mockCharacterDetail,
            loading: false,
        });
    });
   })

// Clear Character   
describe('Clear Character', () => {
    it('properly captures a dispatch to change clear character state', () => {
      expect(reducers({allCharacters: [], character: { name: "dummy"}, loading: false}, clearCharacter())).toEqual({
          allCharacters: [],
          character: {},
          loading: false
        });
    });
   })

// Set Episode Detail   
describe('Set Episode Detail', () => {
    it('properly captures a dispatch to change set episode detail state', () => {
      expect(reducers(initialState, setEpisodeDetail({name: "dummy episode"}))).toEqual({
          allCharacters: [],
          character: {},
          episode: {name: "dummy episode"},
          loading: false
        });
    });
   })

// Get Episode Detail
describe('Get Episode Detail', () => {
    it('properly captures a dispatch to change episode detail state', () => {
      expect(reducers(initialState, getEpisodeDetail(true))).toEqual({
          allCharacters: [],
          character: {},
          loading: false
        });
    });
    it('properly captures a data received from API for one episode', async () => {
        const graphqlQuery = {
            operationName: "episodes",
            query: `
                query episodes($filter:  FilterEpisode!) {
                episodes(filter: $filter) {
                      results{
                        name
                        air_date
                        episode
                    }
                }
                }`,
            variables: {filter: {name: "M. Night Shaym-Aliens!"}},
        };
        expect(reducers(initialState, await waitFor(() => getEpisodeDetail(graphqlQuery, (data) => setEpisodeDetail(data))))).toEqual({
            allCharacters: [],
            character: {},
            episode: mockEpisodeDetail,
            loading: false,
        });
    });
   })
   









