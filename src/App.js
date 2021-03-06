import React from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import Home from './pages/Home/Home';
import authLink from './client/auth';
import {typeDefs} from './client/local'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { useDarkMode } from './useDarkMode';
import {isAuthed} from './auth'
const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'https://swapp.st6.io/graphql',
});

export const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  typeDefs
});


cache.writeData({
  data: {
    authenticated: isAuthed,
  },
});


function App() {

  const [theme, toggleTheme] = useDarkMode();
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
        <Home toggleTheme = {{toggleTheme}}/>
      </ThemeProvider>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;