import { clearCharacter, getCharacter, getCharacterDetail, getEpisodeDetail, setCharacter, setCharacterDetail, setEpisodeDetail } from "../redux/action";
import reducers, { initialState } from "../redux/reducer";

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
   })
   









