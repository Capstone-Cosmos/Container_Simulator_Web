import axios, { AxiosRequestConfig } from "axios";

const API_BASE_URL = "http://localhost:8080/"
export const CreateAxiosInstance= (options?: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');
    const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        ...options,
        headers:{
            "access":accessToken
          }
    });
    return axiosInstance;

}