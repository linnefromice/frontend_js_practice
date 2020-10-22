import * as React from 'react'
import { CSSProperties } from 'react'

const buttonStyles: CSSProperties = {
  fontSize: 16,
  fontWeight: 'bold',
  background: 'green',
  color: 'white',
  borderRadius: 4,
  boxShadow: '2px 2px 4px',
}

export type ButtonProps = {
  name?: string
  value: string
  style?: CSSProperties
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

const Button = (props: ButtonProps): JSX.Element => (
  <input
    type="button"
    name={props.name}
    value={props.value}
    style={{ ...buttonStyles, ...props.style }}
    onClick={props.onClick}
  />
)

export default Button