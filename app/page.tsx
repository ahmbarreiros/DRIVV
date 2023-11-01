"use client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar";
import Billboard from "@/components/Billboard";

export default function Home() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth");
        },
    });
    if (status === "loading") {
        return (
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900/90">
                <img src="/images/logo.png" alt="logo" />
                <h1 className="text-9xl text-white w-full h-10">Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <Billboard />
            <h1 className="text-5xl text-red-500">DRIVV</h1>
            {session?.user?.name ? (
                <h1 className="text-white text-5xl">{session.user.name}</h1>
            ) : (
                ""
            )}
            <button className="h-10 w-full bg-white" onClick={() => signOut()}>
                Logout
            </button>
        </>
    );
}
