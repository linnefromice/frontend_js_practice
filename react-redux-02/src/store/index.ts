import { combineReducers, createStore } from "redux"
import { taskReducer } from "./task/reducers"

const rootReducer = combineReducers({
    task: taskReducer
});
export type RootState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer)
export default store