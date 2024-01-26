"use client";

import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useBillboard = () => {
    const { data, error, isLoading } = useSWR("/api/random", fetcher, {
        revalidateIfStale: true,
        revalidateOnReconnect: true,
        revalidateOnFocus: false,
        revalidateOnMount: true,
    });

    return {
        data,
        error,
        isLoading,
    };
};

export default useBillboard;
