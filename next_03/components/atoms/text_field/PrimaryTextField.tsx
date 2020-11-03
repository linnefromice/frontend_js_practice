import { _BaseTextField, Props as _BaseProps } from "./_BaseTextField"

export type Props = Omit<_BaseProps, 'color'>

export const PrimaryTextField: React.FC<Props> = (props) => {
    const defaultProps: _BaseProps = {
        color: 'primary',
        variant: 'outlined'
    }
    return (
        <_BaseTextField {...defaultProps} {...props} />
    )
}