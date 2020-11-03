import { TextField as MuiTextField, TextFieldProps } from "@material-ui/core"

export type Props = TextFieldProps

export const _BaseTextField: React.FC<Props> = props => {
    return (
        <MuiTextField {...props}>
            {props.children}
        </MuiTextField>
    )
}