"use client";

import React, { useState, useEffect } from "react";
import useVOD from "@/hooks/useVOD";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import CommentSection from "@/components/CommentSection";
import useCreateComment from "@/hooks/useCreateComment";

export default function Watch({
    params,
    searchParams,
}: {
    params: { vodId: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const router = useRouter();
    const vodId = params?.vodId;
    const { data, isLoading } = useVOD(vodId);
    // const { addComment } = useCreateComment();
    if (!isLoading) {
    }
    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full flex flex-row items-center justify-between bg-black/70 fadein">
                <div className="p-4 z-10 flex flex-row items-center gap-8">
                    <FaArrowLeft
                        onClick={() => router.push("/")}
                        className="text-white cursor-pointer"
                        size={35}
                    />
                    <p className="text-white text-1xl md:text-3xl font-bold select-none">
                        <span className="font-light">Watching: </span>
                        {data?.vod?.title}
                    </p>
                </div>
                <div className="text-white relative r-0 right-0 text-sm flex pr-10 m-3 justify-end z-10 select-none opacity-0 absolute md:opacity-100 md:relative">
                    <p className="p-3">{data?.vod?.patch} </p>
                    <p className="p-3">{data?.vod?.role} </p>
                    <p className="p-3">{data?.vod?.server} </p>
                    <p className="p-3">{data?.vod?.champion}</p>
                    <p className="p-3">{data?.vod?.elo}</p>
                    <p className="p-3">{data?.vod?.player}</p>
                    <p className="p-3">{data?.vod?.result}</p>
                </div>
            </nav>

            <iframe
                id="iframeWatch"
                allow="autoplay"
                src={
                    "https://www.youtube.com/embed/" +
                    data?.vod?.URL +
                    "?autoplay=1"
                }
                className="h-full w-full"
                loading="eager"
                allowFullScreen
            ></iframe>
            {/* <CommentSection comments={data?.vod.comments} /> */}
        </div>
    );
}
