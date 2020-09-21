import React from "react"
import "./Summary.scss"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { TASK_STATUSES } from "../global/Constants"

export const Summary = () => {
    const tasks = useSelector((state: RootState) => state.tasks)

    return (
        <div className="Summary">
            <div className="Summary__content">
                <div className="SummaryTitle">Summary</div>
            </div>
            {Object.keys(TASK_STATUSES).map(key => (
                <div key={`summary-content-${key}`} className="Summary__content">
                    <div className="SummaryContentWrapper">
                        <div className="SummaryContentWrapper__label">{key}</div>
                        <div className="SummaryContentWrapper__value">{tasks.filter(task => task.status === key).length}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
