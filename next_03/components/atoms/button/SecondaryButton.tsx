import { _BaseButton, Props as _BaseProps } from "./_BaseButton";

export type Props = Omit<_BaseProps, 'color'>

export const SecondaryButton: React.FC<Props> = (props) => {
    const defaultProps: _BaseProps = {
        color: 'secondary',
        variant: 'contained'
    }
    return (
        <_BaseButton {...defaultProps} {...props}>
            {props.children}
        </_BaseButton>
    )
}