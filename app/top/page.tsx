"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar";
import Billboard from "@/components/Billboard";
import VODList from "@/components/VODList";
import useVODTopList from "@/hooks/useVODTopList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModel";
import useChampionType from "@/hooks/useChampionType";

export default function Home() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth");
        },
    });

    const { data: vods = [] } = useVODTopList();
    const { data: favorites = [] } = useFavorites();
    const { isOpen, closeModal } = useInfoModal();
    const { data: championTypeObject, isLoading } = useChampionType();
    // vods.vods.forEach((element: Record<string, any>) => {
    //     if (!laneTypeArray.find(element.championType)) console.log(element);
    // });

    if (status === "loading") {
        return (
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-[#6f24a6]">
                <img src="/images/logo.png" alt="logo" />
                <br />
                <h1 className="text-9xl text-white w-full h-10">Loading...</h1>
            </div>
        );
    }
    return (
        <main className="select-none">
            <InfoModal visible={isOpen} onClose={closeModal} />
            <NavBar />
            <Billboard />
            <div
                className="pb-40 bg-gradient-to-br from-zinc-900 from-60% to-[#3b1159]"
                id="vods-container"
            >
                <VODList title="My Library" data={favorites.favoriteVODs} />
                <VODList title="VODs" data={vods.vods} />
            </div>
        </main>
    );
}
