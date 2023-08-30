import { ADD_FAV, REMOVE_FAV } from "../actions/action";

const initialState = {
  myFavorites: [],
};

export const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      const result = state.myFavorites.filter((prod) => prod.id !== Number(action.payload));
      return {
        ...state,
        myFavorites: result,
      };

    default:
      return state
  }
};