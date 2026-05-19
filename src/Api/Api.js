import axios from "axios";

const Api = axios.create({
  baseURL: "https://meri-shop-server.onrender.com/api",
  withCredentials: true
})

export default  Api;