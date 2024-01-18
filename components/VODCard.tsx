import React, { useCallback } from "react";
import { BsFillPlayFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModel";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface VODCardProps {
    data: Record<string, any>;
}

const VODCard: React.FC<VODCardProps> = ({ data }) => {
    const router = useRouter();

    const { openModal } = useInfoModal();
    const handleOpenModal = useCallback(() => {
        openModal(data?.id);
    }, [openModal, data?.id]);

    return (
        <div className="group bg-[zinc-900] col-span relative h-[12vw]">
            <img
                onClick={() => router.push(`/watch/${data?.id}`)}
                className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-500 w-full h-[12vw]"
                src={
                    "https://i.ytimg.com/vi/" + data?.URL + "/maxresdefault.jpg"
                }
                alt={data.title + " thumbnail"}
            />
            <div className="opacity-0 absolute top-0 transition duration-300 z-10 invisible sm:visible delay-500 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img
                    onClick={() => router.push(`/watch/${data?.id}`)}
                    className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
                    src={
                        "https://i.ytimg.com/vi/" +
                        data?.URL +
                        "/maxresdefault.jpg"
                    }
                    alt={data.title + " thumbnail"}
                />
                <div className="z-index-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className="flex flex-row items-center gap-3">
                        <div
                            onClick={() => router.push(`/watch/${data?.id}`)}
                            className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-zinc border-2 border-white text-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 hover:text-[#80320e]"
                        >
                            <BsFillPlayFill size={20} />
                        </div>
                        <div
                            onClick={handleOpenModal}
                            className=" text-white cursor-pointer ml-auto w-6 h-6 lg:w-10 lg:h-10 rounded-full flex justify-center items-center transition hover:text-neutral-300"
                        >
                            <AiOutlineInfoCircle size={20} />
                        </div>
                    </div>
                    <div className="flex flex-row  mt-4 items-center">
                        <BsFillCalendarCheckFill className="text-green-400 mr-2" />
                        <p className="text-white font-semibold">Recente</p>
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
                            {data.role}
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
