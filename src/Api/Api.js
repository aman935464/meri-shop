import axios from "axios";

const Api = axios.create({
  baseURL: "https://meri-shop-ser.onrender.com/api",
  withCredentials: true
})

export default  Api;