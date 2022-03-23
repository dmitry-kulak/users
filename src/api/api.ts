import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_JSONPLACEHOLDER_BASE_URL,
});
