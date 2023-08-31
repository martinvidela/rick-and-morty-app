import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const rootReducer = (state = initialState, action) => {
  let sortedCharacters;
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case REMOVE_FAV:
      const result = state.myFavorites.filter(
        (prod) => prod.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: result,
      };

    case ORDER:
      if (action.payload === "A") {
        sortedCharacters = state.myFavorites.sort((a, b) => a.id - b.id);
      }
      if (action.payload === "B") {
        sortedCharacters = state.myFavorites.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: [...sortedCharacters],
      };

    default:
      return state;
  }
};
