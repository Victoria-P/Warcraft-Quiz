import { combineReducers } from "redux";
import { QuestionReducer } from "./questions";
import { CharacterReducer } from "./characters";

import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

const store = createStore(
  combineReducers({
    QuestionReducer,
    CharacterReducer,
  }),
  applyMiddleware(thunk, logger)
);

export default store;
