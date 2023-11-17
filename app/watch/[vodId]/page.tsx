"use client";

import React from "react";
import useVOD from "@/hooks/useVOD";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import RunePage from "@/components/RunePage";

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
                    {data?.vod?.title}
                </p>
            </nav>
            <iframe
                allow="autoplay"
                src={data?.vod?.videoUrl + "?autoplay=1"}
                className="h-full w-full"
                loading="eager"
                allowFullScreen
            ></iframe>
            {/* <video
                controls
                autoPlay
                muted
                className="h-full w-full"
                src={data?.vod.videoUrl}
            ></video> */}
            <div className="h-screen w-screen flex flex-col">
                <div className="text-white text-sm flex pr-10 m-3 justify-end">
                    <p className="p-3">{data?.vod?.patch} </p>
                    <p className="p-3">{data?.vod?.role} </p>
                    <p className="p-3">{data?.vod?.server} </p>
                    <p className="p-3">{data?.vod?.champion}</p>
                    <p className="p-3">{data?.vod?.elo}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3">
                    <div className="pb-5 text-center">
                        <h1 className="text-white text-6xl">Matchup Guide</h1>
                        <p className="text-white text-md">
                            {data?.vod?.description}
                        </p>
                    </div>
                    <div className="w-[38vw] align-center justify-center">
                        <RunePage
                            primaryRunes={data?.vod?.primaryRunes}
                            secondaryRunes={data?.vod?.secondaryRunes}
                            adaptativeRunes={data?.vod?.adaptativeRunes}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
