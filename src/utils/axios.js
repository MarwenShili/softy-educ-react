import axios from "axios";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: "url here",
  headers: headers,
});

export default axiosInstance;
