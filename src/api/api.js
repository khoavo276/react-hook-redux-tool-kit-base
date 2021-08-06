import axios from "axios";
import queryString from "query-string";
import { getToken } from "../utils/Common";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

api.interceptors.request.use(
  (config) => {
    // if (getToken()) {
    //   config.headers["Authorization"] = `Token ${getToken()}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    return false;
    throw error;
  }
);

export default api;
