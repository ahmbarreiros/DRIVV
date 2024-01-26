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
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div className="">
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
                <div className="grid grid-cols-4 gap-3">
                    {data.map((vod) => (
                        <VODCard key={vod.id} data={vod} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default VODList;
