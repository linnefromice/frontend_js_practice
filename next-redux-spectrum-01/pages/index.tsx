import { CreateTask } from '../components/CreateTask'
import Layout from '../components/Layout'
import { TaskList } from '../components/TaskList'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <CreateTask/>
    <TaskList/>
  </Layout>
)

export default IndexPage
