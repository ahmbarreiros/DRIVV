import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useRoleList = (role?: string) => {
    const { data, error, isLoading } = useSWR(
        role ? `/api/roles/${role}` : null,
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
export default useRoleList;
