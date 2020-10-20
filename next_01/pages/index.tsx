import { useQuery, gql } from '@apollo/client'
import Project from '../components/home/project'
import Layout from '../components/Layout'

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

const IndexPage = () => {
  const { loading, error, data } = useQuery(QUERY)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!!</div>

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="m-1">
        <div className="m-2 text-gray-700">Pinned</div>
        <div className="grid grid-cols-2 gap-4">
          {data.viewer.pinnedItems.edges.map((item, index) =>
            <Project
              key={`index-project.${index}`}
              title={item.node.name}
              description={item.node.description}
              language={`DUMMY`}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
