import React, { useCallback, useState } from "react";
import { BsFillPlayFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModel";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useMediaQuery } from "@react-hook/media-query";

interface VODCardProps {
    data: Record<string, any>;
}

const VODCard: React.FC<VODCardProps> = ({ data }) => {
    const router = useRouter();

    const [isBig, setIsBig] = useState(false);

    const match = useMediaQuery("(min-width: 768px)");
    console.log(match);

    useState(() => {
        setIsBig(match);
    });

    const { openModal } = useInfoModal();
    const handleOpenModal = useCallback(() => {
        openModal(data?.id);
    }, [openModal, data?.id]);

    const handleClick = () => {
        if (isBig) {
            return router.push(`/watch/${data?.id}`);
        } else {
            return handleOpenModal();
        }
    };

    return (
        <div className="group bg-[zinc-900] col-span relative h-[24vw] md:h-[12vw]">
            <img
                // onClick={() => router.push(`/watch/${data?.id}`)}
                onClick={handleClick}
                className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-500 w-full md:h-[12vw] h-[24vw]"
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
