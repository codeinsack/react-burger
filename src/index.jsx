import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import GlobalStyled from './GlobalStyled';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <>
    <GlobalStyled />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root'),
);
