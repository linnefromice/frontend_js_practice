import { combineReducers, createStore } from "redux"
import { reducers as taskReducers } from "./task/reducers"

const rootReducer = combineReducers({
    tasks: taskReducers
})
export type RootState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer)
export default store