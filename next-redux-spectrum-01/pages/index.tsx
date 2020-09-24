import Layout from '../components/Layout'
import { SSRProvider, Provider, defaultTheme } from '@adobe/react-spectrum';
import MainContent from '../components/MainContent';

const IndexPage = () => (
  <SSRProvider>
    <Provider colorScheme="dark" theme={defaultTheme}>
      <Layout title="Home | Next.js / React Spectrum / Redux">
        <MainContent/>
      </Layout>
    </Provider>
  </SSRProvider>
)

export default IndexPage
