import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useChampionList = (champion?: string) => {
    const { data, error, isLoading } = useSWR(
        champion ? `/api/champion/${champion}` : null,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );
    return {
        data,
        error,
        isLoading,
    };
};
export default useChampionList;
