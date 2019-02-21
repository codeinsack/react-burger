import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyled from './GlobalStyled';

ReactDOM.render(
  <>
    <GlobalStyled />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);
