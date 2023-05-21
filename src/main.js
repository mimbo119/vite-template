import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routes.js'
import store from "./store"

import { setContext } from '@apollo/client/link/context';
import { createApolloProvider } from '@vue/apollo-option';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_BASE_URL,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});
  

const app = createApp(App)
app.use(router)
app.use(store)
app.use(apolloProvider)
app.mount('#app')