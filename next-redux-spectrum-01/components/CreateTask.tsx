import {
    Flex,
    TextField,
    RadioGroup,
    Radio,
    ActionButton,
    Text
} from '@adobe/react-spectrum'
import AddCircle from '@spectrum-icons/workflow/AddCircle'

export const CreateTask = () => {
    return (
        <Flex direction="row" gap="size-100">
            <TextField label="title" placeholder="Input your new task!"/>
            <RadioGroup label="Status">
                <Radio value="PENDING">着手不可</Radio>
                <Radio value="READY">未着手</Radio>
                <Radio value="DOING">着手中</Radio>
                <Radio value="DONE">完了</Radio>
            </RadioGroup>
            <ActionButton>
                <AddCircle />
                <Text>Add</Text>
            </ActionButton>
        </Flex>
    )
}
