import Layout from '../components/Layout'

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
        <div className="p-1 m-1">
          <div className="flex flex-row justify-between">
            <div className="p-1 text-xl text-blue-500 font-semibold">front_js_practice</div>
            <div className="p-1 w-1/12 border border-solid border-gray-500 rounded-lg flex justify-between items-center">
              <div>★ Star</div>
            </div>
          </div>
          <div className="p-1 text-gray-700 text-sm">Frontend development practice repository with JavaScript frameworks.</div>
          <div className="flex flex-row">
            <div className="p-1 text-gray-700 text-sm">○ CSS</div>
            <div className="p-1 text-gray-700 text-sm">Updated 2 days ago</div>
          </div>
        </div>
        <div className="p-1 m-1">
          <div className="flex flex-row justify-between">
            <div className="p-1 text-xl text-blue-500 font-semibold">docker_practice</div>
            <div className="p-1 w-1/12 border border-solid border-gray-500 rounded-lg flex justify-between items-center">
              <div>★ Star</div>
            </div>
          </div>
          <div className="p-1 text-gray-700 text-sm"></div>
          <div className="flex flex-row">
            <div className="p-1 text-gray-700 text-sm">○ Go</div>
            <div className="p-1 text-gray-700 text-sm">Updated 26 days ago</div>
          </div>
        </div>
        <div className="p-1 m-1">
          <div className="flex flex-row justify-between">
            <div className="p-1 text-xl text-blue-500 font-semibold">ruby_practice_basic</div>
            <div className="p-1 w-1/12 border border-solid border-gray-500 rounded-lg flex justify-between items-center">
              <div>★ Star</div>
            </div>
          </div>
          <div className="p-1 text-gray-700 text-sm">ruby_practice_basic</div>
          <div className="flex flex-row">
            <div className="p-1 text-gray-700 text-sm">○ Ruby</div>
            <div className="p-1 text-gray-700 text-sm">Updated 28 days ago</div>
          </div>
        </div>
        <div className="p-1 m-1">
          <div className="flex flex-row justify-between">
            <div className="p-1 text-xl text-blue-500 font-semibold">practice_design</div>
            <div className="p-1 w-1/12 border border-solid border-gray-500 rounded-lg flex justify-between items-center">
              <div>★ Star</div>
            </div>
          </div>
          <div className="p-1 text-gray-700 text-sm">design training repository (Site projection)</div>
          <div className="flex flex-row">
            <div className="p-1 text-gray-700 text-sm">○ HTML</div>
            <div className="p-1 text-gray-700 text-sm">Updated on 29 Aug</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default RepositoryPage
