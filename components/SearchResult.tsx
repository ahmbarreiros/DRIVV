"use client";
import { useRouter } from "next/navigation";
import InfoModal from "./InfoModal";
import useInfoModal from "@/hooks/useInfoModel";
import { useCallback } from "react";

const SearchResult = ({ result }: any) => {
    const { openModal } = useInfoModal();
    const handleOpenModal = useCallback(() => {
        openModal(result?.id);
    }, [openModal, result?.id]);

    return (
        // TODO(alb): sm may not have image
        <div
            className="flex flex-row flex-wrap justify-center items-center md:items-center md:justify-start md:flex-nowrap md:mr-2 hover:text-gray-300"
            onClick={handleOpenModal}
        >
            <img
                src={
                    "https://i.ytimg.com/vi/" +
                    result?.URL +
                    "/maxresdefault.jpg"
                }
                alt=""
                className="w-[40%] rounded-xl m-3 lg:mr-5"
            />
            <div className="text flex flex-col items-center justify-center lg:ml-5">
                <h4 className="text-md">{result.title}</h4>
                <div className="flex flex-row gap-1 text-sm">
                    <p>{result.champion}</p>
                    <p>{result.role}</p>
                    <p>{result.result}</p>
                    <p>{result.duration}</p>
                </div>
            </div>
        </div>
    );
};
export default SearchResult;
