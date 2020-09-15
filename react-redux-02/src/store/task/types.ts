import { Action } from "redux";

export const ActionTypes = {
    selectTasks: "SELECT_TASKS",
    createTask: "CREATE_TASK",
    updateTask: "UPDATE_TASK",
    deleteTask: "DELETE_TASK",
} as const

type TaskData = {
    id: number;
    status: string;
    title: string;
}
export type Tasks = TaskData[]

interface SelectTaskAction extends Action {
    type: typeof ActionTypes.selectTasks;
}
interface CreateTaskAction extends Action {
    type: typeof ActionTypes.createTask;
    payload: {
        status: string;
        title: string;
    }
}
interface UpdateTaskAction extends Action {
    type: typeof ActionTypes.updateTask;
    payload: {
        id: string;
        status: string;
        title: string;
    }
}
interface DeleteTaskAction extends Action {
    type: typeof ActionTypes.deleteTask;
    payload: {
        id: string;
    }
}
export type TaskActionTypes = SelectTaskAction | CreateTaskAction | UpdateTaskAction | DeleteTaskAction