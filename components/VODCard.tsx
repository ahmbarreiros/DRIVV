import React from "react";
import { BsFillPlayFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { GrScheduleNew } from "react-icons/gr";
import FavoriteButtons from "./FavoriteButtons";

interface VODCardProps {
    data: Record<string, any>;
}

const VODCard: React.FC<VODCardProps> = ({ data }) => {
    console.log(data);

    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <img
                className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-500 w-full h-[12vw]"
                src={data.thumbnailUrl}
                alt={data.title + " thumbnail"}
            />
            <div className="opacity-0 absolute top-0 transition duration-300 z-10 invisible sm:visible delay-500 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img
                    className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
                    src={data.thumbnailUrl}
                    alt={data.title + " thumbnail"}
                />
                <div className="z-index-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className="flex flex-row items-center gap-3">
                        <div
                            onClick={() => {}}
                            className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
                        >
                            <BsFillPlayFill size={20} />
                        </div>
                        <FavoriteButtons vodId={data.id} />
                    </div>
                    <div className="flex flex-row  mt-4 items-center">
                        <BsFillCalendarCheckFill className="text-green-400 mr-2" />
                        <p className="text-white font-semibold">
                            Recently Added
                        </p>
                    </div>
                    <div className="flex flex-row  mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">
                            {data.duration}
                        </p>
                    </div>
                    <div className="flex flex-row  mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">
                            {data.champion}
                        </p>
                        <p className="text-white text-[10px] lg:text-sm">
                            {data.lane}
                        </p>
                        <p className="text-white text-[10px] lg:text-sm">
                            {data.server}
                        </p>
                        <p className="text-white text-[10px] lg:text-sm">
                            {data.patch}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VODCard;