import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-6xl font-bold">Hello Next.js 👋</h1>
    <p className="text-l font-semibold italic">
      <Link href="/repository">
        <a>Go Repository</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
