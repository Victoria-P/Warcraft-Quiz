export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchDataPending = () => {
  return {
    type: FETCH_DATA_PENDING,
  };
};

export const fetchDataSuccess = (items) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: items,
  };
};

export const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
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
