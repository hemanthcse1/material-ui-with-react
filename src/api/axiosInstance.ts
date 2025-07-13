import axios from 'axios';
import { error } from 'console';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8089/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        config.headers['X-Request-Start'] = new Date().getTime().toString();

        if(process.env.NODE_ENV === 'development'){
            console.log(`[API-REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`)
            console.log(`[Bearer-Token]: ${token}`)
            if(config.data){
                console.log(`[REQUEST-BODY]: ${config.data}`)
            }
        }
        return config;
    },
    (error) => {
        if(process.env.NODE_ENV === 'development'){
            console.error(`[ERROR-BODY]: ${error}`)
        }
        return Promise.reject(error)
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        const start = Number(response.config.headers[`X-Request-Start`]);
        const duration = new Date().getTime() - start;

        if(process.env.NODE_ENV === 'development'){
            console.log(`[API-RESPONSE] ${response.status} ${response.config.baseURL}${response.config.url} (${duration}ms)`)
            console.log('[RESPONSE-DATA] ',response.data)
        }

        return response
    },
    (error) => {
        if(process.env.NODE_ENV === 'development'){
            const status = error.response?.status
            const url = error.response.baseURL + error.response.url

            console.error(`[API-ERROR] ${status} || NETWORK-ERROR ${url}`)
            if(error.response){
                console.error(`[ERROR-RESPONSE]: ${error.response.data}`)
            }else{
                console.error('[NETWORK-ERROR]: ',error.message)
            }

        }
        return Promise.reject(error)
    }
);

export default axiosInstance;