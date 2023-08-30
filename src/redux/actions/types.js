import { REMOVE_FAV, ADD_FAV } from "./action";

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
    return{
        type:REMOVE_FAV,
        payload:id
    }

};
