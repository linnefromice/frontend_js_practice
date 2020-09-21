import React, { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import "./Task.scss"

import { updateTaskAction, deleteTaskAction } from "../../store/task/actions"

export const Task = ({id, status, title}: {id: number, status: string, title: string}) => {
    const dispatch = useDispatch()
    const [inputTitle, setInputTitle] = useState(title)
    const [selectStatus, setSelectStatus] = useState(status)
    const handleInputTitle = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputTitle(event.target.value)
    }, [])
    const handleSelectStatus = useCallback((event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectStatus(event.target.value)
    }, [])
    const handleUpdateTask = () => {
        dispatch(updateTaskAction(id, selectStatus, inputTitle))
    }
    const handleDeleteTask = () => {
        dispatch(deleteTaskAction(id))
    }

    return (
        <div className="Task">
            <div
                className="view_task_update_area"
                onClick={handleUpdateTask}
            >
                <div className="view_task_update_area__label">UPDATE</div>
            </div>
            <div
                className="view_task_delete_area"
                onClick={handleDeleteTask}
            >
                <div className="view_task_delete_area__label">DELETE</div>
            </div>
            <select
                className="view_task_status_area"
                onChange={handleSelectStatus}
            >
                {status === "PENDING" ? <option value="PENDING" selected>着手不可</option> : <option value="PENDING">着手不可</option>}
                {status === "READY" ? <option value="READY" selected>未着手</option> : <option value="READY">未着手</option>}
                {status === "DOING" ? <option value="DOING" selected>着手中</option> : <option value="DOING">着手中</option>}
                {status === "DONE" ? <option value="DONE" selected>完了</option> : <option value="DONE">完了</option>}
            </select>
            <input
                className="view_task_input_area"
                onChange={handleInputTitle}
                value={inputTitle}>
            </input>
        </div>
    )
}