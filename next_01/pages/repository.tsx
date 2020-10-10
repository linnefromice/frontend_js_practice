import Layout from '../components/Layout'
import Project from '../components/repository/project'

const datas = [
  {
    title: "front_js_practice",
    description: "Frontend development practice repository with JavaScript frameworks.",
    langurage: "CSS",
    update_context: "Updated 2 days ago",
  },
  {
    title: "docker_practice",
    description: "",
    langurage: "Go",
    update_context: "Updated 2 days ago",
  },
  {
    title: "ruby_practice_basic",
    description: "ruby_practice_basic",
    langurage: "Ruby",
    update_context: "Updated 28 days ago",
  },
  {
    title: "practice_design",
    description: "design training repository (Site projection)",
    langurage: "HTML",
    update_context: "Updated on 29 Aug",
  },
]
const RepositoryPage = () => (
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
      <div className="my-2 flex flex-row">
        <div className="w-5/6 p-1 flex flex-row items-center">
          <div>
            <span className="font-semibold">30</span>
            <span className="text-gray-700 text-sm"> results for repositories matching </span>
            <span>practice</span>
          </div>
        </div>
        <div className="w-1/6 p-1 flex flex-row justify-center items-center">
          <div className="mx-1 px-2 bg-gray-700 border rounded-lg border-solid text-white text-lg">×</div>
          <div className="mx-1 text-gray-700">Clear filter</div>
        </div>
      </div>
      <div className="divide-y divide-gray-300">
        <Project
          title={datas[0].title}
          description={datas[0].description}
          language={datas[0].langurage}
          update_context={datas[0].update_context}
        />
        <Project
          title={datas[1].title}
          description={datas[1].description}
          language={datas[1].langurage}
          update_context={datas[1].update_context}
        />
        <Project
          title={datas[2].title}
          description={datas[2].description}
          language={datas[2].langurage}
          update_context={datas[2].update_context}
        />
        <Project
          title={datas[3].title}
          description={datas[3].description}
          language={datas[3].langurage}
          update_context={datas[3].update_context}
        />
      </div>
    </div>
  </Layout>
)

export default RepositoryPage
