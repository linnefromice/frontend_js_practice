import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Button, { ButtonProps } from "../atoms/Button"

// 表示するコンポーネント
export default {
    title: "Example/Button",
    component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

// 表示されるショーケースの名前
export const Normal = Template.bind({})
// コンポーネントのprops
Normal.args = {
    value: "送信"
}
