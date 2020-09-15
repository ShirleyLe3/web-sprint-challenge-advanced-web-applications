import axios from "axios";

const axiosWithAuth = axios.create({
  baseURL: "https://localhost:5000",
  headers: {
    Authorization: localStorage.getItem("banana"),
  },
});

export default axiosWithAuth;
