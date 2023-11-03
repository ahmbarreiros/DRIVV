"use client";

import React from "react";
import useVOD from "@/hooks/useVOD";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function Watch({
    params,
    searchParams,
}: {
    params: { vodId: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const router = useRouter();
    const vodId = params?.vodId;
    const { data } = useVOD(vodId);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black/70">
                <FaArrowLeft
                    onClick={() => router.push("/")}
                    className="text-white cursor-pointer"
                    size={35}
                />
                <p className="text-white text-1xl md:text-3xl font-bold select-none">
                    <span className="font-light">Watching: </span>
                    {data?.vod.title}
                </p>
            </nav>
            <video
                controls
                autoPlay
                muted
                className="h-full w-full"
                src={data?.vod.videoUrl}
            ></video>
        </div>
    );
}
