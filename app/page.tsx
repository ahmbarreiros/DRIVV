"use client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar";
import Billboard from "@/components/Billboard";
import VODList from "@/components/VODList";
import useVODList from "@/hooks/useVODList";
import useFavorites from "@/hooks/useFavorites";

export default function Home() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth");
        },
    });

    const { data: vods = [], isLoading } = useVODList();
    const { data: favorites = [] } = useFavorites();

    if (status === "loading") {
        return (
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900/90">
                <img src="/images/logo.png" alt="logo" />
                <br />
                <h1 className="text-9xl text-white w-full h-10">Loading...</h1>
            </div>
        );
    }

    return (
        <main className="select-none">
            <NavBar />
            <Billboard />
            <div className="pb-40">
                <VODList title="Trending now" data={vods.vods} />
                <VODList title="My Library" data={favorites.favoriteVODs} />
            </div>
        </main>
    );
}
