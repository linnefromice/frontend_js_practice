import {
    Flex,
    TextField,
    RadioGroup,
    Radio,
    ActionButton,
    Text, View
} from '@adobe/react-spectrum'
import AddCircle from '@spectrum-icons/workflow/AddCircle'

export const CreateTask = () => {
    return (
        <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="size-6000"
            gap="size-100"
        >
            <View>
                <TextField label="title" placeholder="Input your new task!"/>
            </View>
            <View width="size-2000">
                <RadioGroup label="Status">
                    <Radio value="PENDING">着手不可</Radio>
                    <Radio value="READY">未着手</Radio>
                    <Radio value="DOING">着手中</Radio>
                    <Radio value="DONE">完了</Radio>
                </RadioGroup>
            </View>
            <View>
                <ActionButton>
                    <AddCircle />
                    <Text>Add</Text>
                </ActionButton>
            </View>
        </Flex>
    )
}
