import { Button as MuiButton, ButtonProps } from "@material-ui/core"

export const _BaseButton: React.FC<ButtonProps> = (props) => {
    return (
        <MuiButton>
            {props.children}
        </MuiButton>
    )
}