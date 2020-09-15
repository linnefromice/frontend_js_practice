import React from "react"
import "./CreateTask.scss"

export const CreateTask = () => {
    return (
        <div className="CreateTask">
            <div className="submit_button">SUBMIT</div>
            <select className="status_select_area">
                <option value="Pending">着手不可</option>
                <option value="Ready">未着手</option>
                <option value="Doing">着手中</option>
                <option value="Done">完了</option>
            </select>
            <input className="input_area"></input>
        </div>
    )
}