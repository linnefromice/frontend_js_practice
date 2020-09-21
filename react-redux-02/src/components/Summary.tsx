import React from "react"
import "./Summary.scss"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const Summary = () => {
    const tasks = useSelector((state: RootState) => state.tasks)

    return (
        <div className="Summary">
            <div className="Summary__content">
                <div className="SummaryTitle">Summary</div>
            </div>
            <div className="Summary__content">
                <div className="SummaryContentWrapper">
                    <div className="SummaryContentWrapper__label">PENDING</div>
                    <div className="SummaryContentWrapper__value">{tasks.filter(task => task.status === "PENDING").length}</div>
                </div>
            </div>
            <div className="Summary__content">
                <div className="SummaryContentWrapper">
                    <div className="SummaryContentWrapper__label">READY</div>
                    <div className="SummaryContentWrapper__value">{tasks.filter(task => task.status === "READY").length}</div>
                </div>
            </div>
            <div className="Summary__content">
                <div className="SummaryContentWrapper">
                    <div className="SummaryContentWrapper__label">DOING</div>
                    <div className="SummaryContentWrapper__value">{tasks.filter(task => task.status === "DOING").length}</div>
                </div>
            </div>
            <div className="Summary__content">
                <div className="SummaryContentWrapper">
                    <div className="SummaryContentWrapper__label">DONE</div>
                    <div className="SummaryContentWrapper__value">{tasks.filter(task => task.status === "DONE").length}</div>
                </div>
            </div>
        </div>
    )
}
