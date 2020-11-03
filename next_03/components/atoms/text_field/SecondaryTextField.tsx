import { _BaseTextField, Props as _BaseProps } from "./_BaseTextField"

export type Props = Omit<_BaseProps, 'color'>

export const SecondaryTextField: React.FC<Props> = (props) => {
    const defaultProps: _BaseProps = {
        color: 'secondary',
        variant: 'outlined'
    }
    return (
        <_BaseTextField {...defaultProps} {...props} />
    )
}