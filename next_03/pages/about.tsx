import Link from 'next/link'
import Layout from '../components/Layout'
import { _BaseButton } from "../components/atoms/_BaseButton"

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <_BaseButton>Go home</_BaseButton>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
