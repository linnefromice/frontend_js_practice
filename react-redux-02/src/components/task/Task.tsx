import React, { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import "./Task.scss"

import { TASK_STATUSES } from "../../global/Constants"
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
                {Object.keys(TASK_STATUSES).map(key =>
                    status === key
                    ? <option key={`status-option-${key}`} value={key} selected>{TASK_STATUSES[key]}</option>
                    : <option key={`status-option-${key}`} value={key}>{TASK_STATUSES[key]}</option>
                )}
            </select>
            <input
                className="view_task_input_area"
                onChange={handleInputTitle}
                value={inputTitle}>
            </input>
        </div>
    )
}