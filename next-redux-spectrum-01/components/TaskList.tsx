import { Flex } from '@adobe/react-spectrum'
import { ViewTask } from "./ViewTask"

export const TaskList = () => {
    return (
        <Flex
            direction="column"
        >
            <ViewTask/>
            <ViewTask/>
            <ViewTask/>
        </Flex>
    )
}