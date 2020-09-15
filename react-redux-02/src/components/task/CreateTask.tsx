import React from "react"
import "./CreateTask.scss"

export const CreateTask = () => {
    return (
        <div className="CreateTask">
            <div className="create_task_submit_button">SUBMIT</div>
            <select className="create_task_status_select_area">
                <option value="Pending">着手不可</option>
                <option value="Ready">未着手</option>
                <option value="Doing">着手中</option>
                <option value="Done">完了</option>
            </select>
            <input className="create_task_input_area"></input>
        </div>
    )
}