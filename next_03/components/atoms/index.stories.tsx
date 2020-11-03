import {
    Button,
    SecondaryButton
} from "./index"

export const primary: React.FC = () => (
    <>
        <h4>Base</h4>
        <p>
            <Button>PrimaryButton</Button>
        </p>
        <p>
            <Button variant='outlined'>PrimaryButton Outlined</Button>
        </p>
        <p>
            <Button variant='text'>PrimaryButton Text</Button>
        </p>
        <p>
            <Button disabled>PrimaryButton Disabled</Button>
        </p>
        <h4>Size</h4>
        <p>
            <Button size='small'>Size Small</Button>
        </p>
        <p>
            <Button size='medium'>Size Medium</Button>
        </p>
        <p>
            <Button size='large'>Size Large</Button>
        </p>
    </>
)

export const secondary: React.FC = () => (
    <>
        <h4>Base</h4>
        <p>
            <SecondaryButton>SecondaryButton</SecondaryButton>
        </p>
        <p>
            <SecondaryButton variant='outlined'>SecondaryButton Outlined</SecondaryButton>
        </p>
        <p>
            <SecondaryButton variant='text'>SecondaryButton Text</SecondaryButton>
        </p>
        <p>
            <SecondaryButton disabled>SecondaryButton Disabled</SecondaryButton>
        </p>
        <h4>Size</h4>
        <p>
            <SecondaryButton size='small'>Size Small</SecondaryButton>
        </p>
        <p>
            <SecondaryButton size='medium'>Size Medium</SecondaryButton>
        </p>
        <p>
            <SecondaryButton size='large'>Size Large</SecondaryButton>
        </p>
    </>
)

export default {
    title: "Button",
    component: Button
}