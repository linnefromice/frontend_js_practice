import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { Flex, View, Button, RadioGroup, Radio, TextField } from '@adobe/react-spectrum'
import { updateTaskAction, deleteTaskAction } from "../store/task/actions"
import { TASK_STATUSES } from '../utils/Constants'

interface TaskInterface {
    id: number
    status: string
    title: string
}
export const ViewTask = (props: TaskInterface) => {
    const dispatch = useDispatch()
    const [selectState, setSelectStatus] = useState("PENDING")
    const [inputTitle, setInputTitle] = useState("")
    const handleSelectStatus = useCallback((value: string): void => {
        setSelectStatus(value)
    }, [])
    const handleInputTitle = useCallback((value: string): void => {
        setInputTitle(value)
    }, [])
    const handleUpdateTask = () => {
        dispatch(updateTaskAction(props.id, selectState, inputTitle))
    }
    const handleDeleteTask = () => {
        dispatch(deleteTaskAction(props.id))
    }

    return (
        <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="size-10000"
        >
            <View width="size-2000">
                <Button
                    variant="cta"
                    onPress={handleUpdateTask}
                >UPDATE</Button>
            </View>
            <View width="size-2000">
                <Button
                    variant="negative"
                    onPress={handleDeleteTask}
                >DELETE</Button>
            </View>
            <View>
                <RadioGroup
                    orientation="horizontal"
                    label="Status"
                    onChange={handleSelectStatus}
                    defaultValue={props.status}
                >
                    {Object.keys(TASK_STATUSES).map(key => <Radio key={`task.status.${key}`} value={key}>{TASK_STATUSES[key]}</Radio>)}
                </RadioGroup>
            </View>
            <View width="size-2000">
                <TextField
                    label="title"
                    defaultValue={props.title}
                    onChange={handleInputTitle}
                />
            </View>
        </Flex>
    )
}