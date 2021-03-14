import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
  withCredentials: true,
});

const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default http;
