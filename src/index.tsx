import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import AuthProvider from "./context/AuthContext";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the response has a 401 status (unauthorized) and doesn't have a `retry` flag, try to refresh the token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Hit the /refresh endpoint to get a new token
        const { data } = await axios.post("/auth/refresh");

        // Update the access token in local storage

        // Update the access token in the original request and retry it
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return axios(originalRequest);
      } catch (refreshError) {
        if (error.config._retry && error.response?.status)
          window.location.href = "/login";

        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
