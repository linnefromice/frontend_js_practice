import { forwardRef } from "react"
import { Button as MuiButton, ButtonProps } from "@material-ui/core"

export type Props = ButtonProps

export const _BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(function _BaseButton (props, ref) {
  return (
    <MuiButton ref={ref}>
      {props.children}
    </MuiButton>
  )
})