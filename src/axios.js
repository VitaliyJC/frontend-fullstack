import axios from "axios";

const REACT_APP_SERVER_API = process.env.REACT_APP_SERVER_API;

const instance = axios.create({
  baseURL: `${REACT_APP_SERVER_API}`,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
