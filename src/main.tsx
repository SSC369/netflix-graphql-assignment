import { createRoot } from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

import "./index.css";
import App from "./App.tsx";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        episodes: {
          keyArgs: ["page"],
          read: (currentData) => {
            return currentData;
          },
        },
      },
    },
  },
});

// persistCache({
//   cache,
//   storage: window.localStorage,
// });

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql", // Replace with your GraphQL API URL
  }),
  cache,
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
