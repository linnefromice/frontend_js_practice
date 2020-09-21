import React from "react"
import "./TaskBoard.scss"

import { Summary } from "../components/Summary"
import { CreateTask } from "../components/task/CreateTask"
import { TaskList } from "../components/task/TaskList"

export const TaskBoard: React.FC = () => {
    return (
        <div className="TaskBoard">
            <div className="summary_area">
                <div className="summary_area__content">
                    <Summary/>
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