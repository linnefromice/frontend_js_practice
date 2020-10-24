import * as React from 'react'

type InjectProps = { log: string }

function LoggerChildrenProps({
    log, children,
}: InjectProps & {
    children: React.ReactChild | React.ReactChild[]
}): JSX.Element {
    // ロジックをねじ込む
    React.useEffect(() => {
        console.log(`${log} mount`)
        return () => console.log(`${log} unmount`)
    }, [])

    // childrenだと文字列や複数の子も許容してしまうため対応する
    const childrenWithProps = React.Children.map(children, (child) => {
        switch (typeof child) {
            case 'string':
                return child
            case 'object':
                return React.cloneElement(child as React.ReactElement, { log })
            default:
                return null
        }
    })

    return <>{childrenWithProps}</>
}

export default LoggerChildrenProps