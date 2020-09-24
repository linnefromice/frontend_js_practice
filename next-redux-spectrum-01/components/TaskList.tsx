import { useSelector } from "react-redux"
import { Flex } from '@adobe/react-spectrum'

import { RootState } from "../store"
import { ViewTask } from "./ViewTask"



export const TaskList = () => {
    const tasks = useSelector((state: RootState) => state.tasks)

    return (
        <Flex
            direction="column"
        >
            {tasks.map((task) => (
                <ViewTask
                    key={`view_task.${task.id}`}
                    id={task.id}
                    status={task.status}
                    title={task.title}
                />
            ))}
        </Flex>
    )
}