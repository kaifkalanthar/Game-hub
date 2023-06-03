
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genre from "../data/genre";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
const apiClient = new ApiClient<Genre>('/genres');

const fetchGenre = () => apiClient.getAll();
const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenre,
    staleTime: 24 * 60 * 60 * 1000, //24hr,
    initialData: { count: genre.length, results: genre }
})


export default useGenre;