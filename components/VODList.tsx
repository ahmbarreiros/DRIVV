"use client";
import React from "react";

import { isEmpty } from "lodash";
import VODCard from "./VODCard";

interface VODListProps {
    // TODO(alb): Record<string, any>[]; produces error, change this later. for now it works just fine.
    data: Record<string, any>[];
    title: String;
    isLoading?: Boolean;
}

const VODList: React.FC<VODListProps> = ({ data, title, isLoading }) => {
    if (isLoading) {
        return (
            <div className="lg:pb-40 px-4 md:px-12 mt-4 space-y-8">
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    VODs
                </p>
                <div className="grid grid-cols-4 gap-3">
                    <div className="group bg-[zinc-900] col-span relative h-[12vw]">
                        <div className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-500 w-full h-[12vw] animate-pulse bg-gradient-to-tr from-zinc-800 to-zinc-900"></div>
                    </div>
                </div>
            </div>
        );
    }
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className="px-4 md:px-12 mt-[28px] sm:mt-[64px] md:mt-4 space-y-8">
            <div className="">
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {data.map((vod) => (
                        <VODCard key={vod.id} data={vod} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default VODList;
