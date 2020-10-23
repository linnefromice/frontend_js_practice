import * as React from "react"
import TextButton from "../moleculars/TextButton"
import LoggerChildrenProps from "./LoggerChildrenProps"
import withLogger from "./LoggerHOC"

const LogTextButton = ({ log }: { log?: string }) => (
    <TextButton
        onClick={(text) => {
            console.log(log)
            console.log(text)
        }}
    />
)

const WrapTextButton = withLogger(LogTextButton)

const Summary = () => {
    return (
        <div>
            <h2>HOC</h2>
            <WrapTextButton log="[LOG] high order components" />
            <h2>childrenのprops拡張</h2>
            <LoggerChildrenProps log="[LOG] with children props">
                <LogTextButton />
                ##文字列にはinjectionしない##
            </LoggerChildrenProps>
            <h2>componentのprops渡し</h2>
        </div>
    )
}

export default Summary
