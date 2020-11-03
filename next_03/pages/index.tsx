import Link from 'next/link'
import Layout from '../components/Layout'
import { PrimaryButton } from '../components/atoms/PrimaryButton'
import { SecondaryButton } from '../components/atoms/SecondaryButton'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/">Home</Link>
    </p>
    <p>
      <Link href="/about">About</Link>
    </p>
    <p>
      <PrimaryButton>
        Primary
      </PrimaryButton>
    </p>
    <p>
      <SecondaryButton>
        Secondary
      </SecondaryButton>
    </p>
  </Layout>
)

export default IndexPage
