import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import store from './store/store';
import client from './apollo-client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Global styles

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
