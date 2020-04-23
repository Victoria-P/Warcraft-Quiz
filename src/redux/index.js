import redux, { createStore } from "redux";
import userReducer from "./user";

const store = createStore(userReducer);
store.subscribe(() => console.log(store.getState()));
export default store;
