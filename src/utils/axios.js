import axios from "axios";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: headers,
});

export default axiosInstance;
