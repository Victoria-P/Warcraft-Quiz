import {
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
} from "../actions";

const initialState = {
  pending: false,
  characters: [],
  error: null,
};

export function CharacterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        pending: false,
        characters: action.payload,
      };
    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getCharacters = (state) => state.CharacterReducer.characters;
export const getCharactersPending = (state) => state.CharacterReducer.pending;
export const getCharactersError = (state) => state.CharacterReducer.error;
