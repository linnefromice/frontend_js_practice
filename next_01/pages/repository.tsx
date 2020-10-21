import Layout from '../components/Layout'
import Projects from '../components/repository/projects'

const RepositoryPage = () => {
  return (
    <Layout title="Repository | Next.js + TypeScript Example">
      <div className="divide-y divide-gray-300">
        <div className="my-2 flex flex-row">
          <div className="w-7/12 p-1">
            <input className="w-full h-full border border-gray-500 rounded border-opacity-50 p-1" type="text" placeholder="Find a repository..."></input>
          </div>
          <div className="w-2/12 p-1">
            <div className="border border-gray-500 rounded border-opacity-50 p-1">
              <span className="text-gray-700 text-sm">Type: All ▼</span>
            </div>
          </div>
          <div className="w-2/12 p-1">
            <div className="border border-gray-500 rounded border-opacity-50 p-1">
              <span className="text-gray-700 text-sm">Language: All ▼</span>
            </div>
          </div>
          <div className="w-1/12 p-1">
            <div className="rounded bg-green-500 hover:bg-green-700 p-1">
              <span className="text-white">New</span>
            </div>
          </div>
        </div>
      </div>
      <Projects
        search_text=""
      />
    </Layout>
  )
}

export default RepositoryPage
