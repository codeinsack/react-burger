import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import GlobalStyled from './GlobalStyled';
import reducer from './store/reducer';

const logger = store => next => (action) => {
  console.log('[Middleware] Dispatching', action);
  const result = next(action);
  console.log('[[Middleware] next state]', store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <>
    <GlobalStyled />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root'),
);
