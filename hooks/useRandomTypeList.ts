import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useRandomTypeList = (type?: string) => {
    const { data, error, isLoading } = useSWR(
        type ? `/api/random/randomFour/${type}` : null,
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
export default useRandomTypeList;
