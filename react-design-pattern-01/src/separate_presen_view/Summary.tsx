import * as React from "react"
import TextButton from "../moleculars/TextButton"
import LoggerChildrenProps from "./LoggerChildrenProps"
import withLogger from "./LoggerHOC"
import LoggerWithProps from "./LoggerWithProps"
import MenuPage from "../compound_component/MenuPage"

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
            <LoggerWithProps
                log="[LOG] with props"
                component={LogTextButton}
            />
            <h2>compound component</h2>
            <MenuPage/>
        </div>
    )
}

export default Summary
