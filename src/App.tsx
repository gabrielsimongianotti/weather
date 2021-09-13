import { ApolloProvider } from '@apollo/client';

import apolloClient from './services/apollo';
import { Routes } from './Routes';
import { GlobalStyle } from "./styles/global";

function App () {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Routes />
    </ApolloProvider>
  );
}

export default App;
