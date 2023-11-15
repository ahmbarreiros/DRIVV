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
                <div className="flex flex-row items-center justify-center p-3">
                    <div className="w-[38vw] align-center m-0">
                        <RunePage
                            primaryRunes={data?.vod?.primaryRunes}
                            secondaryRunes={data?.vod?.secondaryRunes}
                            adaptativeRunes={data?.vod?.adaptativeRunes}
                        />
                    </div>
                    <div className="m-0 p-0">{data?.vod?.description}</div>
                </div>
                <div className="text-white text-xl flex">
                    <img
                        src={data?.vod?.buildUrl}
                        className="w-[15vw]"
                        alt=""
                    />

                    {data?.vod?.patch}
                    {data?.vod?.role}
                    {data?.vod?.server}
                    {data?.vod?.champion}
                </div>
            </div>
        </div>
    );
}
