import { _BaseButton, Props as _BaseProps } from "./_BaseButton";

export type Props = Omit<_BaseProps, 'color'>

export const PrimaryButton: React.FC<Props> = (props) => {
    const defaultProps: _BaseProps = {
        color: 'primary',
        variant: 'contained'
    }
    return (
        <_BaseButton {...defaultProps} {...props}>
            {props.children}
        </_BaseButton>
    )
}