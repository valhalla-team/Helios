import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_URL_BACKEND}/${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_BACKEND}`,
  cache: new InMemoryCache(),
});

export default client;
