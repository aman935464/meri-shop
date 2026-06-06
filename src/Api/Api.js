import axios from "axios";

const Api = axios.create({
  baseURL: "https://meri-shop-ser.onrender.com/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true
})

export default  Api;