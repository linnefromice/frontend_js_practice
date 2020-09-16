import React from "react"
import "./Task.scss"

export const Task = ({id, status, title}: {id: number, status: string, title: string}) => {
    return (
        <div className="Task">
            <div className="view_task_update_area">
                UPDATE
            </div>
            <div className="view_task_delete_area">
                DELETE
            </div>
            <div className="view_task_status_area">
                {status}
            </div>
            <div className="view_task_input_area">
                {title}
            </div>
        </div>
    )
}