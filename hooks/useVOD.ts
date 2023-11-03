import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVOD = (id?: string) => {
    const { data, error, isLoading } = useSWR(
        id ? `/api/vods/${id}` : null,
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
export default useVOD;
