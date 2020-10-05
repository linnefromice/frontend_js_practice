import Link from 'next/link'
import Layout from '../components/Layout'

const RepositoryPage = () => (
  <Layout title="Repository | Next.js + TypeScript Example">
    <h1 className="text-6xl font-bold">Repsoitory Page</h1>
    <p className="m-2 text-l font-semibold italic">
      <Link href="/repository">
        <a>Go Home</a>
      </Link>
    </p>
    <div className="m-2 flex flex-col">
      <p className="font-serif text-lg text-gray-800 italic">front_js_practice</p>
      <p className="font-serif text-lg text-gray-800 italic">ruby_practice_basic</p>
      <p className="font-serif text-lg text-gray-800 italic">practice_design</p>
      <p className="font-serif text-lg text-gray-800 italic">portfolio_one</p>
    </div>
  </Layout>
)

export default RepositoryPage
