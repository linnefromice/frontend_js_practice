import { useQuery, gql } from '@apollo/client'
import Project from './project'

const dummyDatas = [
  {
    title: "ff_quiz_app_flutter_01",
    description: "Quiz Application of FFIX created by Flutter",
    language: "Dart",
  },
  {
    title: "study_record_app_01",
    description: "A study record application version 1.0",
    language: "Dart",
  },
  {
    title: "portfolio_one",
    description: "portfolio / 1st work",
    language: "JavaScript",
  },
  {
    title: "vuetify",
    description: "news app using vuetify / new york times api.",
    language: "Vue",
  },
  {
    title: "app_tweet_01",
    description: "tweet app 01 / react, rails",
    language: "TypeScript",
  },
  {
    title: "practice_design",
    description: "design training repository (Site projection)",
    language: "HTML",
  },
]
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
