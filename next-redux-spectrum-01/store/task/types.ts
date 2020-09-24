import { Action } from "redux"

export const ActionTypes = {
    createTask: "CREATE_TASK",
    updateTask: "UPDATE_TASK",
    deleteTask: "DELETE_TASK",
} as const

type TaskData = {
    id: number
    status: string
    title: string
}
export type Tasks = TaskData[]

interface CreateTaskAction extends Action {
    type: typeof ActionTypes.createTask
    payload: {
        status: string
        title: string
    }
}
interface UpdateTaskAction extends Action {
    type: typeof ActionTypes.updateTask
    payload: {
        id: number
        status: string
        title: string
    }
}
interface DeleteTaskAction extends Action {
    type: typeof ActionTypes.deleteTask
    payload: {
        id: number
    }
}
export type TaskActionTypes = CreateTaskAction | UpdateTaskAction | DeleteTaskAction