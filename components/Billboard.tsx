"use client";
import React, { useCallback } from "react";
import useBillboard from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModel";

const Billboard = () => {
    const { data, isLoading } = useBillboard();

    const { openModal } = useInfoModal();
    const handleOpenModal = useCallback(() => {
        openModal(data?.value?.id);
    }, [openModal, data?.value?.id]);

    if (!data) {
        return (
            <div className="relative h-[56.25vw]">
                {/* For future videos} */}
                <div className="relative inline-block w-full h-full after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent pt-0 animate-pulse bg-gradient-to-t from-zinc-700 to-zinc-800"></div>
            </div>
        );
    }

    return (
        <div className="relative h-[56.25vw]">
            {/* For future videos} */}
            <div className="relative inline-block w-full h-full text-white after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent pt-0">
                {/* <iframe
                    allow="autoplay"
                    src={data?.vod?.URL + "?autoplay=1"}
                    className="h-full w-full"
                    loading="eager"
                    allowFullScreen
                ></iframe> */}
                <img
                    className="-z-1 relative block w-full h-[56.25vw] object-cover  brightness-[60%] transition duration-300"
                    src={
                        "https://i.ytimg.com/vi/" +
                        data?.value?.URL +
                        "/maxresdefault.jpg"
                    }
                    alt=""
                />
            </div>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold sm:text-4xl drop-shadow-xl">
                    {data?.value?.title}
                </p>
                <p className="text-white text-[8px] md:text-[14px] h-full mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] sm:text-[14px] drop-shadow-xl">
                    {data?.value?.champion} {data?.value?.role}{" "}
                    {data?.value?.server} {data?.value?.patch}{" "}
                    {data?.value?.result}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton
                        vodId={data?.value?.id}
                        className="text-white bg-zinc rounded-full py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center justify-center hover:bg-[#80320e]/20 transition duration border-2 border-[#80320e] hover:bg-[#80320e]"
                    />
                    <button
                        onClick={handleOpenModal}
                        className="bg-[#80320e]/30 border-2 border-[#FFFFFF1A] text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 hover:border-2 hover:border-[#80320e]  transition"
                    >
                        <AiOutlineInfoCircle className="mr-1" />
                        More
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Billboard;
