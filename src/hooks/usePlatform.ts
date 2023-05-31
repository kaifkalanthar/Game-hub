import { useQuery } from "@tanstack/react-query";
import http from '../services/api-client';
import { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const fetchPlatform = () => http.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data);
const usePlatform = () =>  useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatform,
    staleTime: 24 * 60 * 60 * 1000,
})

export default usePlatform;


