import {
    Flex,
    TextField,
    RadioGroup,
    Radio,
    ActionButton,
    Text, View
} from '@adobe/react-spectrum'
import AddCircle from '@spectrum-icons/workflow/AddCircle'
import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { createTaskAction } from "../store/task/actions"

export const CreateTask = () => {
    const dispatch = useDispatch()
    const [selectState, setSelectStatus] = useState("PENDING")
    const [inputTitle, setInputTitle] = useState("")
    const handleSelectStatus = useCallback((value: string): void => {
        setSelectStatus(value)
    }, [])
    const handleInputTitle = useCallback((value: string): void => {
        setInputTitle(value)
    }, [])
    const handleCreateTask = () => {
        dispatch(createTaskAction(selectState, inputTitle))
        setInputTitle("")
    }

    return (
        <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="size-6000"
            gap="size-100"
        >
            <View>
                <TextField
                    label="title"
                    placeholder="Input your new task!"
                    onChange={handleInputTitle}
                />
            </View>
            <View width="size-2000">
                <RadioGroup
                    label="Status"
                    onChange={handleSelectStatus}
                >
                    <Radio value="PENDING">着手不可</Radio>
                    <Radio value="READY">未着手</Radio>
                    <Radio value="DOING">着手中</Radio>
                    <Radio value="DONE">完了</Radio>
                </RadioGroup>
            </View>
            <View>
                <ActionButton onPress={handleCreateTask}>
                    <AddCircle />
                    <Text>Add</Text>
                </ActionButton>
            </View>
        </Flex>
    )
}
