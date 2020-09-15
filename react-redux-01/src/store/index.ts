import { combineReducers, createStore } from "redux";
import { countReducer } from "./counter/reducer";

const rootReducer = combineReducers({
  counter: countReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store;
