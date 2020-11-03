import {
    Button,
    SecondaryButton
} from "./index"

export const primary: React.FC = () => (
    <>
        <h4>Base</h4>
        <Button>PrimaryButton</Button>
        <Button variant='outlined'>PrimaryButton Outlined</Button>
        <Button variant='text'>PrimaryButton Text</Button>
        <Button disabled>PrimaryButton Disabled</Button>
        <h4>Size</h4>
        <Button size='small'>Size Small</Button>
        <Button size='medium'>Size Medium</Button>
        <Button size='large'>Size Large</Button>
    </>
)

export const secondary: React.FC = () => (
    <>
        <h4>Base</h4>
        <SecondaryButton>SecondaryButton</SecondaryButton>
        <SecondaryButton variant='outlined'>SecondaryButton Outlined</SecondaryButton>
        <SecondaryButton variant='text'>SecondaryButton Text</SecondaryButton>
        <SecondaryButton disabled>SecondaryButton Disabled</SecondaryButton>
        <h4>Size</h4>
        <SecondaryButton size='small'>Size Small</SecondaryButton>
        <SecondaryButton size='medium'>Size Medium</SecondaryButton>
        <SecondaryButton size='large'>Size Large</SecondaryButton>
    </>
)

export default {
    title: "Button",
    component: Button
}