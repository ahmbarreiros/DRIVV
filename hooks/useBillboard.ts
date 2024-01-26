import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { use } from "react";

const useBillboard = () => {
    const { data, error, isLoading } = useSWR("/api/random", fetcher, {
        revalidateIfStale: true,
        revalidateOnReconnect: true,
        revalidateOnFocus: false,
    });

    return {
        data,
        error,
        isLoading,
    };
};

export default useBillboard;
