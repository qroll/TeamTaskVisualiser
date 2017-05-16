import axios from "axios";

let API_URL = "http://localhost:9000";

let instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  withCredentials: true
});

export const callApi = (endpoint, method = "post", body) => {
  switch (method) {
    case "post":
      return instance.post(endpoint, body);
    case "delete":
      return instance.delete(endpoint);
    default:
      return instance.get(endpoint);
  }
};
