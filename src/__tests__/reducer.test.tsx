import reducers from "../redux/reducer";
import * as types from "../redux/actionType";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducers(undefined, {})).toEqual({
      allCharacters: [],
      character: {},
      loading: false,
    });
  });

  it("should handle SET_CHARACTER", () => {
    const action = {
        type: types.SET_CHARACTER,
        payload: [{ id: 1, name: 'Rick Sanchez'}],
    };

    const expectedState = {
        allCharacters: [{ id: 1, name: 'Rick Sanchez'}],
        character: {},
        loading: false,
    };
    expect(reducers(undefined, action)).toEqual(expectedState);
  });

  it("shoild handle SET_CHARACTER_DETAIL", () => {
    const action = {
        type: types.SET_CHARACTER_DETAIL,
        payload: [{ id: 1, name: 'Rick Sanchez'}],
    };

    const expectedState = {
        allCharacters: [],
        character: [{ id:1, name: 'Rick Sanchez'}],
        loading: false,
    };
    expect(reducers(undefined, action)).toEqual(expectedState);
  });

  it("should handle SET_EPISODE", () => {
    const action = {
        type: types.SET_EPISODE,
        payload: [{ id: 1, name:'Pilot'}],
    };

    const expectedState = {
        allCharacters: [],
        character: {},
        episode: [{ id: 1, name:'Pilot'}],
        loading: false,
    };

    expect(reducers(undefined,action)).toEqual(expectedState);
  });

  it('should handle CLEAR_CHARACTER', () => {
    const action = {
      type: types.CLEAR_CHARACTER,
    };

    const expectedState = {
      allCharacters: [],
      character: {},
      loading: false,
    };

    expect(reducers(undefined, action)).toEqual(expectedState);
  });


});
