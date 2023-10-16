import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql/tempmailserver",
  cache: new InMemoryCache(),
});

export default client;
