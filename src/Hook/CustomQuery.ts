import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { axiosInstanceExercise } from "../config/axios.config";

interface IAuthenticatedQuery {
  queryKey: string[];
  url: string;
}

const useCustomQuery = <T = any,>({ queryKey, url }: IAuthenticatedQuery): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey,
    queryFn: async (): Promise<T> => {
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

        const { data } = await axiosInstanceExercise.get<T>(url);

        console.log('API response:', {
          url,
          queryKey,
          data
        });

        if (!data) {
          throw new Error('No data received from API');
        }

        return data;
      } catch (error: any) {
        console.error('Query Error:', {
          url,
          queryKey,
          error: error.message,
          response: error.response?.data,
          status: error.response?.status
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