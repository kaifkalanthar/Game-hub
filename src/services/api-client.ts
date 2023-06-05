import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next : string | null;
    results: T[];
}
class ApiClient<T>{
    endpoint : string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = async (config?: AxiosRequestConfig) =>{ 
        const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
        return res.data;
    }
}

export const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c9df1b4acee64fc8bb546555c3703958'
    }
});

export default ApiClient;