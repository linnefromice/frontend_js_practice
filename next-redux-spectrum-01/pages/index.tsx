import { CreateTask } from '../components/CreateTask'
import Layout from '../components/Layout'
import { SSRProvider, Provider, defaultTheme } from '@adobe/react-spectrum';
import { TaskList } from '../components/TaskList'

const IndexPage = () => (
  <SSRProvider>
    <Provider colorScheme="dark" theme={defaultTheme}>
      <Layout title="Home | Next.js + TypeScript Example">
        <CreateTask/>
        <TaskList/>
      </Layout>
    </Provider>
  </SSRProvider>
)

export default IndexPage
