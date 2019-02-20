import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyled from './GlobalStyled';

ReactDOM.render(
  <>
    <GlobalStyled />
    <App />
  </>,
  document.getElementById('root'),
);
