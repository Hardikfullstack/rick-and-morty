import * as types from "./actionType";
import fetchGraphQLApi from "../utils/FetchGraphQLApi";

export const getCharacter = async (graphqlQuery:any, callback: any) => {
        let chars = await fetchGraphQLApi(graphqlQuery);
        if(chars && chars?.data && chars?.data?.characters && chars?.data?.characters?.results?.length){
            return callback(chars?.data?.characters?.results)
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
export const getCharacterDetail = async (query:any, callback: any) => {
        let chars = await fetchGraphQLApi(query);
        if(chars && chars?.data && chars?.data?.character ){
            return callback(chars?.data?.character)
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
export const getEpisodeDetail = async (query: any, callback: any) => {
        let chars = await fetchGraphQLApi(query);
        if(chars && chars?.data && chars?.data?.episodes && chars?.data?.episodes?.results ){
            return callback(chars?.data?.episodes?.results)
        }
};
