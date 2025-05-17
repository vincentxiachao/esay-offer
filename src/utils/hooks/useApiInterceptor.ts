// import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// import { useCallback } from 'react';
// const baseURL = 'http://localhost:3000';
// const apiClient = axios.create({ baseURL: baseURL });

// export function useApiInterceptor() {
//   const requestInterceptor = useCallback(
//     (config: InternalAxiosRequestConfig) => {
//       const token = localStorage.getItem('family-token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     []
//   );
//   const responseInterceptor = useCallback((response: AxiosResponse) => {
//     return response.data;
//   }, []);

//   const errorInterceptor = useCallback((error: any) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('family-token');
//       window.location.href = '/error';
//     } else {
//       return Promise.reject(error);
//     }
//   }, []);
//   apiClient.interceptors.request.use(requestInterceptor);
//   apiClient.interceptors.response.use(responseInterceptor, errorInterceptor);
//   const get = useCallback(async (url: string, params?: Record<string, any>) => {
//     const res = await apiClient.get(url, params);
//     return res.data;
//   }, []);

//   const post = useCallback(async (url: string, data: any) => {
//     const res = await apiClient.post(url, data);
//     return res.data;
//   }, []);

//   return { get, post };
// }
