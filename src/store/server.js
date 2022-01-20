import axios from "axios";
export const BASE_URL = process.env.VUE_APP_UNSPLASH_URL;
export const ACCESS_KEY = process.env.VUE_APP_ACCESS_KEY;
export const SERVER = axios.create({
  baseURL: BASE_URL,
});

export default SERVER;
