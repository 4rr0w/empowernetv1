import axios from 'axios';

axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND_URL || 'https://empowernet.herokuapp.com';

const instance = axios.create();

export default instance;
