import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.101:8888",
  // baseURL: 'http://192.168.147:8888',
});

export default api;
