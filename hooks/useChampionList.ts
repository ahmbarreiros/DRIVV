import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useChampionList = (champion?: string) => {
    const { data, error, isLoading } = useSWR(
        champion ? `/api/champion/${champion}` : null,
        fetcher,
        {
            revalidateIfStale: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
        }
    );
    return {
        data,
        error,
        isLoading,
    };
};
export default useChampionList;
