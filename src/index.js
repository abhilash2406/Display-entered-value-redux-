import React from 'react';
import ReactDom from 'react-dom/client';
import App from './components/App';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const el = document.getElementById('root');

const root = ReactDom.createRoot(el);

root.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>
);
