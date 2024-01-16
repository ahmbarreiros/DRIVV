"use client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar";
import Billboard from "@/components/Billboard";
import VODList from "@/components/VODList";
import useRandomList from "@/hooks/useRandomList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModel";
import useRoleList from "@/hooks/useRoleList";

export default function Home() {
    // const { data: session, status } = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         redirect("/auth");
    //     },
    // });

    const { data: vods = [], isLoading } = useRandomList();
    const { data: favorites = [] } = useFavorites();
    const { isOpen, closeModal } = useInfoModal();
    const { data: top = [] } = useRoleList("Top");
    const { data: jg = [] } = useRoleList("Jungle");
    const { data: mid = [] } = useRoleList("Mid");
    const { data: bot = [] } = useRoleList("Bot");
    const { data: support = [] } = useRoleList("Support");

    // if (status === "loading") {
    //     return (
    //         <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-[#80320e] h-[100vh]">
    //             <img src="/images/logo.png" alt="logo" />
    //             <br />
    //             <h1 className="text-9xl text-white w-full h-10">Loading...</h1>
    //         </div>
    //     );
    // }

    return (
        <main className="select-none">
            <InfoModal visible={isOpen} onClose={closeModal} />
            <NavBar />
            <Billboard />
            <div
                className="lg:pt-10 lg:pb-40 h-[100vh] bg-gradient-to-br from-zinc-900 from-60% to-[#80320e]"
                id="vods-container"
            >
                <VODList title="VODs" data={vods.vods} />
                <VODList title="Top" data={top.vods} />
                <VODList title="Jungle" data={jg.vods} />
                <VODList title="Mid" data={mid.vods} />
                <VODList title="Bot" data={bot.vods} />
                <VODList title="Bot" data={support.vods} />
            </div>
        </main>
    );
}
