import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "23e24c5f5e1c417d972371521f256621",
  },
});

export default apiClient;
