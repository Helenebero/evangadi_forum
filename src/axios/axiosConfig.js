import axios from "axios";
const axiosBase = axios.create({
  baseURL: "https://evangadi-backend-f7ly.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
