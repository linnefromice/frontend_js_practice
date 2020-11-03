import {
    TextField,
    SecondaryTextField
} from "./index"
import { useState } from 'react'

export const primary: React.FC = () => {
    const [value, setValue] = useState<string>('Hello TextField')
    return (
        <>
            <h4>Base</h4>
            <TextField />
            <h4>Input</h4>
            <TextField onChange={e => setValue(e.target.value)}/>
        </>
    )
}

export const secondary: React.FC = () => {
    const [value, setValue] = useState<string>('Hello TextField')
    return (
        <>
            <h4>Base</h4>
            <SecondaryTextField />
            <h4>Input</h4>
            <SecondaryTextField onChange={e => setValue(e.target.value)}/>
        </>
    )
}

export default {
    title: 'TextField',
    component: TextField
}
