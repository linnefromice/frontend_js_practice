import "../src/styles/index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const AUTH_TOKEN = "XXXX"
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `token ${AUTH_TOKEN}`,
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