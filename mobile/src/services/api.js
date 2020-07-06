import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.58.218:8888",
  // baseURL: 'http://192.168.1.158:8888',
});

export default api;
