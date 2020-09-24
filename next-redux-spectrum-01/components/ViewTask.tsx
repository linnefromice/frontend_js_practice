import { Flex, View, Button, Text, TextField } from '@adobe/react-spectrum'

interface TaskInterface {
    id: number
    status: string
    title: string
}
export const ViewTask = (props: TaskInterface) => {
    return (
        <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <View width="size-2000">
                <Button variant="cta">UPDATE</Button>
            </View>
            <View width="size-2000">
                <Button variant="negative">DELETE</Button>
            </View>
            <View width="size-1000">
                <Text>{props.status}</Text>
            </View>
            <View width="size-2000">
                <TextField label="title" defaultValue={props.title}/>
            </View>
        </Flex>
    )
}