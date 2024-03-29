import React, { useCallback, useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import PlayButton from "@/components/PlayButton";
import useInfoModal from "@/hooks/useInfoModel";
import useVOD from "@/hooks/useVOD";

interface InfoModalProps {
    visible?: boolean;
    onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
    const [isVisible, setIsVisible] = useState(!!visible);
    const { vodId } = useInfoModal();
    const { data = {}, isLoading } = useVOD(vodId);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(!!visible);
    }, [visible]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 500);
    }, [onClose]);

    if (isLoading) {
        return (
            <div
                className="z-50 transition duration-300 bg-black/80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0"
                ref={componentRef}
            >
                <div className="relative mx-2 md:mx-0 w-[100vw] mx-auto max-w-3xl rounded-md overflow-hidden">
                    <div
                        className={`${
                            isVisible ? "scale-100" : "scale-0"
                        } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md w-full h-full animate-pulse bg-gradient-to-tr from-zinc-800 to-zinc-900`}
                    >
                        <div className="relative h-96">
                            <div className="w-full brightness-[40%] object-cover h-full"></div>
                            <div
                                onClick={handleClose}
                                className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black/70 flex items-center justify-center"
                            >
                                <AiOutlineClose className="text-white w-6 h-6 hover:w-7 hover:h-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    // useEffect(() => {
    //     const handleClickOutside = (event: any) => {
    //         if (
    //             componentRef.current &&
    //             !componentRef.current.contains(event.target as Node) &&
    //             isVisible
    //         ) {
    //             handleClose();
    //         }
    //     };

    //     window.addEventListener("click", handleClickOutside);

    //     return () => {
    //         window.removeEventListener("click", handleClickOutside);
    //     };
    // }, []);
    if (!visible) {
        return null;
    }

    return (
        <div
            className="z-50 transition duration-300 bg-black/80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0"
            ref={componentRef}
        >
            <div className="relative mx-2 md:mx-0 w-[100vw] mx-auto max-w-3xl rounded-md overflow-hidden">
                <div
                    className={`${
                        isVisible ? "scale-100" : "scale-0"
                    } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
                >
                    <div className="relative md:h-96 h-full">
                        <video
                            src={data?.vod?.URL}
                            poster={
                                "https://i.ytimg.com/vi/" +
                                data?.vod?.URL +
                                "/maxresdefault.jpg"
                            }
                            autoPlay
                            muted
                            loop
                            className="w-full brightness-[40%] object-cover h-full"
                        ></video>
                        <div
                            onClick={handleClose}
                            className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black/70 flex items-center justify-center"
                        >
                            <AiOutlineClose className="text-white w-6 h-6 hover:w-7 hover:h-7" />
                        </div>
                        <div className="absolute bottom-[10%] left-10">
                            <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                                {data?.vod?.title}
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                                <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-zinc border-2 border-white text-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 hover:text-[#80320e]">
                                    {" "}
                                    <PlayButton vodId={data?.vod?.id} />{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-12 py-8 w-full">
                        <p className="text-white text-lg">
                            {data?.vod?.duration}
                        </p>
                        <div className="flex flex-row items-center gap-2 text- flex-wrap">
                            <p className="text-white text-sm">
                                {data?.vod?.champion}
                            </p>
                            <p className="text-white text-sm">
                                {data?.vod?.role}
                            </p>
                            <p className="text-white text-sm">
                                {data?.vod?.server}
                            </p>
                            <p className="text-white text-sm">
                                {data?.vod?.patch}
                            </p>
                            <p className="text-white text-sm">
                                {data?.vod?.player}
                            </p>
                            <p className="text-white text-sm">
                                {data?.vod?.elo}
                            </p>
                            <p className="text-white text-sm">
                                {data?.vod?.result}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InfoModal;
