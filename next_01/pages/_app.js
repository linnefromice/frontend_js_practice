import "../src/styles/index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `token ${process.env.APP_GITHUB_KEY}`,
  },
  cache: new InMemoryCache()
})
const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App;