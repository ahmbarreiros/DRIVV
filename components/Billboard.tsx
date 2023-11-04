import React, { useCallback } from "react";
import useBillboard from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModel";

const Billboard = () => {
    const { data } = useBillboard();

    const { openModal } = useInfoModal();
    const handleOpenModal = useCallback(() => {
        openModal(data?.value?.id);
    }, [openModal, data?.value?.id]);

    return (
        <div className="relative h-[56.25vw]">
            {/* For future videos} */}
            <div className="relative inline-block w-full h-full text-white after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent">
                <video
                    className="w-full h-[56.25vw] object-cover  brightness-[60%] transition duration-300"
                    poster={data?.value?.thumbnailUrl}
                    src={data?.value?.videoUrl}
                    autoPlay
                    muted
                    loop
                ></video>
                {/* <img
                    className="-z-1 relative block w-full h-[56.25vw] object-cover  brightness-[60%] transition duration-300"
                    src={data?.value.thumbnailUrl}
                    alt=""
                /> */}
            </div>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                    {data?.value?.title}
                </p>
                <p className="text-white text-[8px] md:text-lg h-full mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {data?.value?.description}
                </p>
                <p className="text-white text-[8px] md:text-[14px] h-full mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {data?.value?.champion} {data?.value?.lanePlayed}{" "}
                    {data?.value?.server} {data?.value?.patch}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton
                        vodId={data?.value?.id}
                        className="border-2 border-white hover:border-[#6f24a6] hover:bg-[#6f24a6]"
                    />
                    <button
                        onClick={handleOpenModal}
                        className="bg-white bg-opacity-30 border-2 border-[#FFFFFF1A] text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 hover:border-2 hover:border-[#6f24a6]  transition"
                    >
                        <AiOutlineInfoCircle className="mr-1" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Billboard;
