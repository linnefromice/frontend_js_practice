import * as React from "react"

type InjectProps = { log: string }

function LoggerWithProps({
    log,
    component,
}: {
    log: string
    component: React.ComponentType<InjectProps>
}): React.ReactElement {
    // ロジックをねじ込む
    React.useEffect(() => {
        console.log(`${log} mount`)

        return () => console.log(`${log} unmount`)
    }, [])
    const Component = component
    return <Component log={log} />
}

export default LoggerWithProps