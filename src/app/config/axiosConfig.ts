import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { API, BASE_URL } from "@/app/constants/api";

interface ApiConfig {
  baseUrl: string;
  headers?: Record<string, string>;
}

const params: ApiConfig = {
  baseUrl: API + BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
};

const axiosConfig: AxiosRequestConfig = {
  baseURL: params.baseUrl,
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);

const api = (axios: AxiosInstance, config: ApiConfig = params) => {
  return {
    get: <T>(url: string, customConfig: AxiosRequestConfig = {}) =>
      axios.get<T>(url, {
        ...axiosConfig,
        ...customConfig,
        headers: { ...config.headers, ...customConfig.headers },
      }),

    post: <T>(
      url: string,
      data: unknown,
      customConfig: AxiosRequestConfig = {}
    ) =>
      axios.post<T>(url, data, {
        ...axiosConfig,
        ...customConfig,
        headers: { ...config.headers, ...customConfig.headers },
      }),

    put: <T>(
      url: string,
      data: unknown,
      customConfig: AxiosRequestConfig = {}
    ) =>
      axios.put<T>(url, data, {
        ...axiosConfig,
        ...customConfig,
        headers: { ...config.headers, ...customConfig.headers },
      }),

    patch: <T>(
      url: string,
      data: unknown,
      customConfig: AxiosRequestConfig = {}
    ) =>
      axios.patch<T>(url, data, {
        ...axiosConfig,
        ...customConfig,
        headers: { ...config.headers, ...customConfig.headers },
      }),

    delete: <T>(url: string, customConfig: AxiosRequestConfig = {}) =>
      axios.delete<T>(url, {
        ...axiosConfig,
        ...customConfig,
        headers: { ...config.headers, ...customConfig.headers },
      }),
  };
};

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api(axiosInstance, params);
