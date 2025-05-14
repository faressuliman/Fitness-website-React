import { useQuery } from "@tanstack/react-query";
import { axiosInstanceExercise } from "../config/axios.config";

const useCustomQuery = <T>(key: string, url: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      try {
        if (!url) {
          throw new Error('URL is required');
        }

        const { data } = await axiosInstanceExercise.get<T>(url);

        if (!data) {
          throw new Error('No data received from API');
        }

        return data;
      } catch (error: any) {
        console.error('Query Error:', error);
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