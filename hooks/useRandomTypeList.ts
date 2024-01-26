"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useRandomTypeList = (type?: string) => {
    const { data, error, isLoading } = useSWR(
        type ? `/api/random/randomFour/${type}` : null,
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
export default useRandomTypeList;
