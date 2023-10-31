"use client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth");
        },
    });
    if (status === "loading") {
        return <h1 className="text-9xl text-white w-full h-10">Loading...</h1>;
    }
    return (
        <>
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
