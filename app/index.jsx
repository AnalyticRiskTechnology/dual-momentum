import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Main from './components/Main';
import { stocks } from './redux/stocks';
import { portfolio } from './redux/portfolio';

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    stocks,
    portfolio
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);

