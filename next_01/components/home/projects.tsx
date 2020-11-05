import { useQuery, gql } from '@apollo/client'
import Project from './project'

const QUERY = gql`
  query {
    viewer {
      pinnedItems(last: 10) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              languages(last: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Projects: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!!</div>
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.viewer.pinnedItems.edges.map((item, index) => {
        const languages = item.node.languages.edges.map((item) => (
          {
            name: item.node.name,
            color: item.node.color
          }
        ))
        return (
          <Project
            key={`index-project.${index}`}
            title={item.node.name}
            description={item.node.description}
            languages={languages}
          />
        )
      })}
  </div>
  )
}
export default Projects
