import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyled from './GlobalStyled';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common.Authorization = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use((request) => {
  console.log(request);
  return request;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render(
  <>
    <GlobalStyled />
    <App />
  </>,
  document.getElementById('root'),
);
