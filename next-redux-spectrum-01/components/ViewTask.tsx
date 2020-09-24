import { Flex, View, Button, Text, TextField } from '@adobe/react-spectrum'

export const ViewTask = () => {
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
                <Text>着手中</Text>
            </View>
            <View width="size-2000">
                <TextField label="title" placeholder="Input your new task!"/>
            </View>
        </Flex>
    )
}