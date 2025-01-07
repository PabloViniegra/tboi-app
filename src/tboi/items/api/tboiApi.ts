import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const API_KEY = import.meta.env.VITE_APP_API_AUTHORIZATION;

const tboiApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-Key": API_KEY,
  }
});

export default tboiApi;
