"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVODList = () => {
    const { data, error, isLoading } = useSWR(
        "/api/random/randomFour",
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
export default useVODList;
