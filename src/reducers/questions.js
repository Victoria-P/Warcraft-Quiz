import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../actions";

const initialState = {
  pending: false,
  questions: [],
  error: null,
};

export function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        questions: action.payload,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getQuestions = (state) => state.questions;
export const getQuestionsPending = (state) => state.pending;
export const getQuestionsError = (state) => state.error;
