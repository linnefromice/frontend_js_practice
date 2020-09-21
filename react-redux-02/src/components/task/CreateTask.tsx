import React, { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import "./CreateTask.scss"

import { createTaskAction } from "../../store/task/actions"
import { TASK_STATUSES } from "../../global/Constants"

export const CreateTask = () => {
    const dispatch = useDispatch()
    const [inputTitle, setInputTitle] = useState("")
    const [selectStatus, setSelectStatus] = useState(Object.keys(TASK_STATUSES)[0])
    const handleInputTitle = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputTitle(event.target.value)
    }, [])
    const handleSelectStatus = useCallback((event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectStatus(event.target.value)
    }, [])
    const handleCreateTask = () => {
        dispatch(createTaskAction(selectStatus, inputTitle))
        setInputTitle("")
    }

    return (
        <div className="CreateTask">
            <div
                className="create_task_submit_button"
                onClick={handleCreateTask}
            >
                <div className="create_task_submit_button__label">SUBMIT</div>
            </div>
            <select
                className="create_task_status_select_area"
                onChange={handleSelectStatus}
            >
                {Object.keys(TASK_STATUSES).map(key => <option key={`status-option-${key}`} value={key}>{TASK_STATUSES[key]}</option>)}
            </select>
            <input
                className="create_task_input_area"
                onChange={handleInputTitle}
            ></input>
        </div>
    )
}