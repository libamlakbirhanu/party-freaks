import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import AuthProvider from "./context/AuthContext";

const AUTH_TOKEN = localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:8800/";
axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the response has a 401 status (unauthorized) and doesn't have a `retry` flag, try to refresh the token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Hit the /refresh endpoint to get a new token
        const { data } = await axios.post("/refresh", {
          refreshToken: localStorage.getItem("refreshToken"),
        });

        // Update the access token in local storage
        console.log({ data });

        // Update the access token in the original request and retry it
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token", refreshError);
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
