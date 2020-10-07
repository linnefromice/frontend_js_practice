import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="m-1">
      <div className="m-2 text-gray-700">Pinned</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
          <div className="text-blue-700 font-semibold">ff_quiz_app_flutter_01</div>
          <div className="text-gray-500 text-xs">Quiz Application of FFIX created by Flutter</div>
          <div className="text-sm">
            <span className="text-teal-500">●</span>
            <span className="text-gray-500">Dart</span>
          </div>
        </div>
        <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
          <div className="text-blue-700 font-semibold">study_record_app_01</div>
          <div className="text-gray-500 text-xs">A study record application version 1.0</div>
          <div className="text-sm">
            <span className="text-teal-500">●</span>
            <span className="text-gray-500">Dart</span>
          </div>
        </div>
        <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
          <div className="text-blue-700 font-semibold">portfolio_one</div>
          <div className="text-gray-500 text-xs">portfolio / 1st work</div>
          <div className="text-sm">
            <span className="text-yellow-500">●</span>
            <span className="text-gray-500">JavaScript</span>
          </div>
        </div>
        <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
          <div className="text-blue-700 font-semibold">vuetify-news-app</div>
          <div className="text-gray-500 text-xs">news app using vuetify / new york times api.</div>
          <div className="text-sm">
            <span className="text-indigo-700">●</span>
            <span className="text-gray-500">Vue</span>
          </div>
        </div>
        <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
          <div className="text-blue-700 font-semibold">app_tweet_01</div>
          <div className="text-gray-500 text-xs">tweet app 01 / react, rails</div>
          <div className="text-sm">
            <span className="text-green-800">●</span>
            <span className="text-gray-500">TypeScript</span>
          </div>
        </div>
        <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
          <div className="text-blue-700 font-semibold">practice_design</div>
          <div className="text-gray-500 text-xs">design training repository (Site projection)</div>
          <div className="text-sm">
            <span className="text-red-700">●</span>
            <span className="text-gray-500">HTML</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
