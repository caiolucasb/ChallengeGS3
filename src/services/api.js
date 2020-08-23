import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.200.104:3334",
});

export default api;
