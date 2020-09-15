import { combineReducers, createStore } from "redux";
import { countReducer } from "./counter/reducer";
import { todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  counter: countReducer,
  todo: todoReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store;
