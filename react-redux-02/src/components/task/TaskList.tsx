import React from "react"
import "./TaskList.scss"
import { Task } from "./Task"

export const TaskList = () => {
    return (
        <div className="TaskList">
            <div className="TaskList__content"><Task/></div>
            <div className="TaskList__content"><Task/></div>
            <div className="TaskList__content"><Task/></div>
            <div className="TaskList__content"><Task/></div>
            <div className="TaskList__content"><Task/></div>
        </div>
    )
}