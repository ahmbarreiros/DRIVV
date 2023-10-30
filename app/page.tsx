"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
    const { data: session } = useSession();
    if (!session) {
        console.log("assincrono");
    }

    if (session) {
        console.log("sessiasfasfasfasfasfsafason");

        return (
            <>
                <h1 className="text-white text-5xl">{session?.user?.name}</h1>
                <h1 className="text-5xl text-red-500">DRIVV</h1>
                <button
                    className="h-10 w-full bg-white"
                    onClick={() => signOut()}
                >
                    Logout
                </button>
            </>
        );
    }
}
