import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://imbituba.stepzen.net/api/eating-octopus/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Apikey imbituba::stepzen.net+1000::2f975180cc27b2316eda69e952f76b3690e96e0aa9f55e95ee6dca523925f4fa",
  },
});

export default client;
