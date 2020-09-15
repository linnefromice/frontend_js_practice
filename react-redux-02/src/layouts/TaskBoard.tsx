import React from "react"
import "./TaskBoard.scss"

import { CreateTask } from "../components/task/CreateTask"
import { TaskList } from "../components/task/TaskList"

export const TaskBoard: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="summary_area">
                <div className="summary_area__content">
                    SUMMARY
                </div>
            </div>
            <div className="create_area">
                <div className="create_area__content">
                    <CreateTask/>
                </div>
            </div>
            <div className="list_area">
                <div className="list_area__content">
                    <TaskList/>
                </div>
            </div>
        </div>
    )
}