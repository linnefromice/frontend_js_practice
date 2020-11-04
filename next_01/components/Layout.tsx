import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router";
import { useQuery, gql } from '@apollo/client';

const Header: React.FC = () => {
  const router = useRouter();
  const linkClassNames = "text-blue-500 hover:text-blue-800"

  return (
    <div className="my-2 flex flex-row max-w-screen-xl mx-auto">
      <ul className="flex">
        <Link href="/">
          <li className="mr-6">
            <a className={router.pathname === '/' ? `font-bold ${linkClassNames}` : linkClassNames} href="#">Overview</a>
          </li>
        </Link>
        <Link href="/repository">
          <li className="mr-6">
            <a className={router.pathname === '/repository' ? `font-bold ${linkClassNames}` : linkClassNames} href="#">Repository</a>
          </li>
          </Link>
      </ul>
    </div>
  )
}

const Footer: React.FC = () => (
  <div className="my-2 flex flex-row max-w-screen-xl mx-auto">
    <span>©️ 2020 linnefromice</span>
  </div>
)

const QUERY = gql`
  query {
    viewer {
      name
      bio
      avatarUrl
      websiteUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`
const Profile: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!! {error}</div>

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://avatars1.githubusercontent.com/u/13592640" alt="avator image"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.viewer.name}</div>
          <div className="text-l mb-2">{data.viewer.name}</div>
          <p className="text-gray-700 text-base">
            {data.viewer.bio}
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="text-sm">
            <span className="font-bold">{data.viewer.followers.totalCount}</span>
            <span className="text-gray-700"> followers ・ </span>
            <span className="font-bold">{data.viewer.following.totalCount}</span>
            <span className="text-gray-700"> following ・ ★ </span>
            <span className="font-bold">{data.viewer.starredRepositories.totalCount}</span>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flutter</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Kotlin</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Soccer</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Movie</span>
        </div>
        <div className="px-6 py-4">
          # <a className="text-gray-700 text-base" href={`https://${data.viewer.websiteUrl}`} target="_blank">{data.viewer.websiteUrl}</a>
        </div>
      </div>
    </>
  )
}

type LayoutProps = Partial<{
  children: ReactNode
  title: string
}>
const Layout: React.FC<LayoutProps> = ({ children, title = 'This is the default title' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex flex-row max-w-screen-xl mx-auto">
        <div className="w-3/12 mx-1">
          <Profile />
        </div>
        <div className="w-9/12 mx-1">
          <div className="rounded overflow-hidden shadow-lg">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
