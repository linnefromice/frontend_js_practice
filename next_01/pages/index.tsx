import Project from '../components/home/project'
import Layout from '../components/Layout'

const datas = [
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
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="m-1">
      <div className="m-2 text-gray-700">Pinned</div>
      <div className="grid grid-cols-2 gap-4">
        <Project
          title={datas[0].title}
          description={datas[0].description}
          language={datas[0].language}
        />
        <Project
          title={datas[1].title}
          description={datas[1].description}
          language={datas[1].language}
        />
        <Project
          title={datas[2].title}
          description={datas[2].description}
          language={datas[2].language}
        />
        <Project
          title={datas[3].title}
          description={datas[3].description}
          language={datas[3].language}
        />
        <Project
          title={datas[4].title}
          description={datas[4].description}
          language={datas[4].language}
        />
        <Project
          title={datas[5].title}
          description={datas[5].description}
          language={datas[5].language}
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
