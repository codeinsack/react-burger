import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import GlobalStyled from './GlobalStyled';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <>
    <GlobalStyled />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root'),
);
