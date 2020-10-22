import * as React from 'react'
import { CSSProperties } from 'react'

const textInputStyles: CSSProperties = {
  fontSize: 18,
  fontWeight: 'bold',
}

export type TextInputProps = {
  name?: string
  value?: string
  style?: CSSProperties
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = (props: TextInputProps): JSX.Element => (
  <input
    type="text"
    name={props.name}
    value={props.value}
    style={{ ...textInputStyles, ...props.style }}
    onChange={props.onChange}
  />
)

export default TextInput