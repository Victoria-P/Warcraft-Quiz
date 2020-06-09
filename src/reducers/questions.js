import {
  FETCH_QUESTIONS_PENDING,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
} from "../actions";

const initialState = {
  pending: false,
  questions: [],
  error: null,
};

export function QuestionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        questions: action.payload,
      };
    case FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getQuestions = (state) => state.QuestionReducer.questions;
export const getQuestionsPending = (state) => state.QuestionReducer.pending;
export const getQuestionsError = (state) => state.QuestionReducer.error;
