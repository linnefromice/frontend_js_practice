import type { AppProps } from 'next/app'
import { Suspense } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div><h1>loading</h1></div>}>
      <Component {...pageProps} />
    </Suspense>
  )
}

export default MyApp
