import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8888/', // FIXME, it's default local server port
  withCredentials: false,
});
