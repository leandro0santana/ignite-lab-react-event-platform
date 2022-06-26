import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL_GRAPHCMS,
  headers: { 'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_GRAPHCMS}` },
  cache: new InMemoryCache()
});