import * as types from "./actionType";
import fetchGraphQLApi from "../utils/FetchGraphQLApi";

export const getCharacter = (graphqlQuery:any) => {
    return async (dispatchEvent:any) => {
        let chars = await fetchGraphQLApi(graphqlQuery);
        if(chars && chars?.data && chars?.data?.characters && chars?.data?.characters?.results?.length){
            dispatchEvent(setCharacter(chars?.data?.characters?.results))
        }
        else {
            console.log(chars.error)
        }
    }
};

export const setCharacter = (char:any) => {
    return {
        type: types.SET_CHARACTER,
        payload: char,
    }
};
export const setCharacterDetail = (char:any) => {
    return {
        type: types.SET_CHARACTER_DETAIL,
        payload: char,
    }
}
export const getCharacterDetail = (query:any) => {
    return async (dispatchEvent:any) => {
        let chars = await fetchGraphQLApi(query);
        if(chars && chars?.data && chars?.data?.character ){
            dispatchEvent(setCharacterDetail(chars?.data?.character))
        }
        else {
            console.log(chars.error)
        }
    }
};

export const clearCharacter = () => {
    return { type: types.CLEAR_CHARACTER };
  };

export const setEpisodeDetail = (char:any) => {
    return {
        type: types.SET_EPISODE,
        payload: char,
    }
}
export const getEpisodeDetail = (query: any) => {
    return async (dispatchEvent: any) => {
        let chars = await fetchGraphQLApi(query);
        console.log("chares", chars)
        if(chars && chars?.data && chars?.data?.episodes && chars?.data?.episodes?.results ){
            dispatchEvent(setEpisodeDetail(chars?.data?.episodes?.results))
        }
        else {
            console.log(chars.error)
        }
    }
};
