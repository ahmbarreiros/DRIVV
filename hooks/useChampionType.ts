import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useChampionType = () => {
    const { data, error, isLoading } = useSWR("/api/championType", fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading,
    };
};
export default useChampionType;
