import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const tboiApi = axios.create({
  baseURL: BASE_URL,
});

export default tboiApi;
