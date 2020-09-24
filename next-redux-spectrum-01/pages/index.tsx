import { CreateTask } from '../components/CreateTask'
import Layout from '../components/Layout'
import { SSRProvider, Provider, defaultTheme, Flex } from '@adobe/react-spectrum';
import { TaskList } from '../components/TaskList'

const IndexPage = () => (
  <SSRProvider>
    <Provider colorScheme="dark" theme={defaultTheme}>
      <Layout title="Home | Next.js + TypeScript Example">
        <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
          >
          <CreateTask/>
          <TaskList/>
        </Flex>
      </Layout>
    </Provider>
  </SSRProvider>
)

export default IndexPage
