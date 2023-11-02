import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVODList = () => {
    const { data, error, isLoading } = useSWR("/api/vods", fetcher, {
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
export default useVODList;
