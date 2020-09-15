import React from "react"
import "./TaskBoard.scss"

import { CreateTask } from "../components/task/CreateTask"
import { TaskList } from "../components/task/TaskList"

export const TaskBoard: React.FC = () => {
    return (
        <>
            <CreateTask/>
            <TaskList/>
        </>
    )
}