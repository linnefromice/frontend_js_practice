import { Flex, Button, Text, TextField } from '@adobe/react-spectrum'

export const ViewTask = () => {
    return (
        <Flex direction="row" gap="size-100">
            <Button variant="cta">UPDATE</Button>
            <Button variant="negative">DELETE</Button>
            <Text>着手中</Text>
            <TextField label="title" placeholder="Input your new task!"/>
        </Flex>
    )
}