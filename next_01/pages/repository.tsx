import { useQuery, gql } from '@apollo/client'
import dayjs from 'dayjs'
import Layout from '../components/Layout'
import Project from '../components/repository/project'

const dummyDatas = [
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
const QUERY = gql`
  query {
    viewer {
      repositories(last: 100, isFork: false, orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            url
            name
            description
            updatedAt
            languages(last: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                node {
                  name
                  color
                }
                size
              }
              totalSize
            }  
          }
        }
      }
    }
  }
`
const RepositoryPage = () => {
  const { loading, error, data } = useQuery(QUERY)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!!</div>

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
        <div className="my-2 flex flex-row">
          <div className="w-5/6 p-1 flex flex-row items-center">
            <div>
              <span className="font-semibold">{data.viewer.repositories.edges.length}</span>
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
          {data.viewer.repositories.edges.map((edge, index) => {
            const language = edge.node.languages.edges[0] ? edge.node.languages.edges[0].node.name : "NOTHING"
            const languages = edge.node.languages.edges.map((item) => (
              {
                name: item.node.name,
                color: item.node.color,
                size_percentage: (Math.floor(item.size / edge.node.languages.totalSize * Math.pow( 10, 2 ))).toString() + "%"
              }
            ))
            console.log(languages)
            return (
              <Project
                key={`repository-project.${index}`}
                title={edge.node.name}
                description={edge.node.description}
                languages={languages}
                update_context={dayjs(edge.node.updatedAt).format('YY/MM/DD HH:mm:ss')}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default RepositoryPage
