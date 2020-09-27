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
import { TASK_STATUSES } from '../utils/Constants'

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
            width="size-10000"
            gap="size-100"
        >
            <View>
                <TextField
                    label="title"
                    placeholder="Input your new task!"
                    onChange={handleInputTitle}
                />
            </View>
            <View>
                <RadioGroup
                    orientation="horizontal"
                    label="Status"
                    onChange={handleSelectStatus}
                >
                    {Object.keys(TASK_STATUSES).map(key => <Radio key={`task.status.${key}`} value={key}>{TASK_STATUSES[key]}</Radio>)}
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
