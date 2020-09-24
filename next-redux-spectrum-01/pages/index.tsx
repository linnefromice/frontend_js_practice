import Layout from '../components/Layout'
import { SSRProvider, Provider as SpectrumProvider, defaultTheme } from '@adobe/react-spectrum';
import { Provider as ReduxProvider } from "react-redux"
import store from "../store"
import MainContent from '../components/MainContent';

const IndexPage = () => (
  <SSRProvider>
    <ReduxProvider store={store}>
      <SpectrumProvider colorScheme="dark" theme={defaultTheme}>
        <Layout title="Home | Next.js / React Spectrum / Redux">
          <MainContent/>
        </Layout>
      </SpectrumProvider>
    </ReduxProvider>
  </SSRProvider>
)

export default IndexPage
