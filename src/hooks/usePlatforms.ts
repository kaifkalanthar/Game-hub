import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import ApiClient from "../services/api-client";
import Platform from "../entities/Platform";

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const fetchPlatform = () => apiClient.getAll();
const usePlatforms = () =>  useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatform,
    staleTime: ms('24h'),
})

export default usePlatforms;


