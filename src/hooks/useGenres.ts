
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import genre from "../data/genre";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>('/genres');

const fetchGenre = () => apiClient.getAll();
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenre,
    staleTime: ms('24h'),
    initialData: genre
})


export default useGenres;