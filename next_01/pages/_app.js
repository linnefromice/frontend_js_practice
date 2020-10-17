import "../src/styles/index.css";
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const AUTH_TOKEN = "XXXX"
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `token ${AUTH_TOKEN}`,
    }
  }
})
const client = new ApolloClient({
  uri: authLink.concat(httpLink),
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