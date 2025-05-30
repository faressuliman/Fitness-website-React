import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axiosInstanceExercise } from "../config/axios.config";

interface IAuthenticatedQuery {
    queryKey: string[];
    url: string;
}

const useCustomQuery = ({ queryKey, url }: IAuthenticatedQuery) => {
    return useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            try {
                if (!url) {
                    console.error('No URL provided for query:', queryKey);
                    throw new Error('URL is required');
                }

                console.log('Making API request:', {
                    url,
                    queryKey,
                    headers: axiosInstanceExercise.defaults.headers
                });

                const { data } = await axiosInstanceExercise.get(url);

                console.log('API response:', {
                    url,
                    queryKey,
                    data
                });

                if (!data) {
                    throw new Error('No data received from API');
                }

                return data;
            } catch (error) {
                const axiosError = error as AxiosError;
                console.error('Query Error:', {
                    url,
                    queryKey,
                    error: axiosError.message,
                    response: axiosError.response?.data,
                    status: axiosError.response?.status
                });
                throw error;
            }
        },
        retry: 1,
        retryDelay: 1000,
        enabled: !!url,
        staleTime: 300000, // 5 minutes
        gcTime: 3600000, // 1 hour
    });
};

export default useCustomQuery;