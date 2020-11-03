import Link from 'next/link'
import Layout from '../components/Layout'
import { _BaseButton } from "../components/atoms/_BaseButton"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <_BaseButton>
        <Link href="/about">About</Link>
      </_BaseButton>
    </p>
  </Layout>
)

export default IndexPage
