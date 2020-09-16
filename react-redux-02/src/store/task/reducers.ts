import { ActionTypes, TaskActionTypes, Tasks } from "./types"

const initialState: Tasks = [
    {
        id: 1,
        status: "DONE",
        title: "Create Logic in Service class"
    },
    {
        id: 2,
        status: "DOING",
        title: "Create View in Login Component"
    },
    {
        id: 3,
        status: "READY",
        title: "Use Redux to frontend entire"
    },
    {
        id: 4,
        status: "PENDING",
        title: "Data Migration"
    },
]

export const taskReducer = (state = initialState, action: TaskActionTypes) => {
    switch (action.type) {
        case ActionTypes.selectTasks:
            return state
        case ActionTypes.createTask:
            const latestId = state.length
            state.push({
                id: latestId + 1,
                status: action.payload.status,
                title: action.payload.title,
            })
            console.log(state)
            return state
        case ActionTypes.updateTask:
            return state.filter((data) => {
                if (data.id === action.payload.id) {
                    data.status = action.payload.status
                    data.title = action.payload.title
                }
            })
        case ActionTypes.deleteTask:
            return state.filter((data) => data.id !== action.payload.id)
        default:
            const _: never = action;
            return state
    }
}