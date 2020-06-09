export const FETCH_QUESTIONS_PENDING = "FETCH_QUESTIONS_PENDING";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR";

export const FETCH_CHARACTERS_PENDING = "FETCH_CHARACTERS_PENDING";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR";

export const fetchQuestionsPending = () => {
  return {
    type: FETCH_QUESTIONS_PENDING,
  };
};

export const fetchQuestionsSuccess = (items) => {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: items,
  };
};

export const fetchQuestionsError = (error) => {
  return {
    type: FETCH_QUESTIONS_ERROR,
    error: error,
  };
};

export const fetchCharactersPending = () => {
  return {
    type: FETCH_CHARACTERS_PENDING,
  };
};

export const fetchCharactersSuccess = (items) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: items,
  };
};

export const fetchCharactersError = (error) => {
  return {
    type: FETCH_CHARACTERS_ERROR,
    error: error,
  };
};

export const increaseUserLevel = (points) => ({
  type: "INCREASE_USER_LEVEL",
  points,
});

export const setUserCharacterId = (characterId) => ({
  type: "SET_USER_CHARACTER_ID",
  characterId,
});
