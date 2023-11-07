import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVODTopList = () => {
    const { data, error, isLoading } = useSWR("/api/vods/top", fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return {
        data,
        error,
        isLoading,
    };
};
export default useVODTopList;
