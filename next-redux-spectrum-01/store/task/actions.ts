import { ActionTypes, TaskActionTypes } from "./types"

export const createTaskAction = (status: string, title: string): TaskActionTypes => {
    return {
        type: ActionTypes.createTask,
        payload: {
            status: status,
            title: title,
        }
    }
}
export const updateTaskAction = (id:number, status: string, title: string): TaskActionTypes => {
    return {
        type: ActionTypes.updateTask,
        payload: {
            id: id,
            status: status,
            title: title,
        }
    }
}
export const deleteTaskAction = (id: number): TaskActionTypes => {
    return {
        type: ActionTypes.deleteTask,
        payload: {
            id: id
        }
    }
}