import { ActionTypes, TaskActionTypes, Tasks } from "./types"

const initialState: Tasks = []

export const taskReducer = (state = initialState, action: TaskActionTypes) => {
    const latestId = state.length
    switch (action.type) {
        case ActionTypes.selectTasks:
            return state
        case ActionTypes.createTask:
            return {} // TODO
        case ActionTypes.updateTask:
            return {} // TODO
        case ActionTypes.deleteTask:
            return {} // TODO
        default:
            const _: never = action;
            return state
    }
}