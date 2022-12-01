import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import reducers from './Reducers';
import {createStore} from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<Provider store={createStore(reducers)}><App /></Provider>

)
