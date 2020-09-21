import React from "react"
import "./Summary.scss"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const Summary = () => {
    const tasks = useSelector((state: RootState) => state.tasks)

    return (
        <div className="Summary">
            <div className="Summary__content">
                Summary
            </div>
            <div className="Summary__content">
                PENDING<br/>
                {tasks.filter(task => task.status === "PENDING").length}
            </div>
            <div className="Summary__content">
                READY<br/>
                {tasks.filter(task => task.status === "READY").length}
            </div>
            <div className="Summary__content">
                DOING<br/>
                {tasks.filter(task => task.status === "DOING").length}
            </div>
            <div className="Summary__content">
                DONE<br/>
                {tasks.filter(task => task.status === "DONE").length}
            </div>
        </div>
    )
}
