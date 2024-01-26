import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVOD = (id?: string) => {
    const { data, error, isLoading } = useSWR(
        id ? `/api/vods/${id}` : null,
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
export default useVOD;
