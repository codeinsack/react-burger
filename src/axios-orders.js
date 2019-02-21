import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-25183.firebaseio.com/',
});

export default instance;
