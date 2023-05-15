import * as types from "./actionType";

export const initialState = {
    allCharacters: [],
    character: {},
    loading: false
}

const reducers = (state = initialState, action:any) => {
    switch (action.type) {
        case types.SET_CHARACTER:
            return {
                ...state,
                allCharacters: action.payload,
                loading: false,
            }
        case types.SET_CHARACTER_DETAIL:
            return {
                ...state,
                character: action.payload,
                loading: false,
            }
            case types.SET_EPISODE:
            return {
                ...state,
                episode: action.payload,
                loading: false,
            }
            case types.CLEAR_CHARACTER:
                return {
                    ...state,
                    character: {},
                }
        default:
            return state;
    }
}

export default reducers;
