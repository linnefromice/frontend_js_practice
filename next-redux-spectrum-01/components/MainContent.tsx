import { Flex } from '@adobe/react-spectrum';
import { CreateTask } from '../components/CreateTask'
import { TaskList } from '../components/TaskList'

const MainContent = () => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <CreateTask/>
            <TaskList/>
        </Flex>
    )
}

export default MainContent