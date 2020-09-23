import { Flex } from '@adobe/react-spectrum'
import { ViewTask } from "./ViewTask"

export const TaskList = () => {
    return (
        <Flex direction="column" gap="size-100">
            <ViewTask/>
            <ViewTask/>
            <ViewTask/>
        </Flex>
    )
}