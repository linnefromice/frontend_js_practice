import Link from 'next/link'
import Layout from '../components/Layout'

const RepositoryPage = () => (
  <Layout title="Repository | Next.js + TypeScript Example">
    <h1>Repository</h1>
    <p>This is the Repository page</p>
    <p>
      <Link href="/">
        <a>Go Repository</a>
      </Link>
    </p>
  </Layout>
)

export default RepositoryPage
