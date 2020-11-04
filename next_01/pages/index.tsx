import Projects from '../components/home/projects'
import Layout from '../components/Layout'

const IndexPage: React.FC = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="m-1">
        <div className="m-2 text-gray-700">Pinned</div>
        <Projects />
      </div>
    </Layout>
  )
}

export default IndexPage
