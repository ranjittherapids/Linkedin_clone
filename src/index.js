import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import reducer from './reducer'
import { createStore } from 'redux';
const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(

  <Provider store={store}>
      <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);
serviceWorker.unregister();
