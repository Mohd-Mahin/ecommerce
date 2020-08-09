import axios, { AxiosInstance } from "axios";

const ajaxUtis = axios.create({
  baseURL: "/api",
});

export { ajaxUtis };
