import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import client from "./Apollo/client"


ReactDOM.render(
  <ApolloProvider client={client}>  
    <App />
    </ApolloProvider>, 
  document.getElementById('root')
);

