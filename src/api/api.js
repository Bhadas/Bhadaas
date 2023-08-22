import axios from "axios";

const api = axios.create({
  baseURL: "https://bhadas-server.onrender.com/api",
});

export default api;
