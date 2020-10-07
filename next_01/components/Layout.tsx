import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      <ul className="flex">
        <Link href="/">
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">Overview</a>
          </li>
        </Link>
        <Link href="/repository">
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">Repository</a>
          </li>
          </Link>
      </ul>
    </div>
    <div className="flex flex-row max-w-screen-xl mx-auto">
      <div className="w-3/12 mx-1">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src="https://avatars1.githubusercontent.com/u/13592640" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">linnefromice</div>
            <div className="text-l mb-2">linnefromice</div>
            <p className="text-gray-700 text-base">
              work at manager.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flutter</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Kotlin</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Soccer</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Movie</span>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-1">
        <div className="rounded overflow-hidden shadow-lg">
          {children}
        </div>
      </div>
    </div>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
