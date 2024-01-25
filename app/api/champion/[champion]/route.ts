import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(
    req: Request,
    {
        params,
        searchParams,
    }: {
        params: { champion: string };
        searchParams: { [key: string]: string | string[] | undefined };
    }
) {
    try {
        // await serverAuth(req);
        const champion = params?.champion;

        if (typeof champion !== "string") {
            throw new Error("Invalid champion");
        }
        if (!champion) {
            throw new Error("Invalid champion");
        }
        const vods = await prismadb.vOD.findMany({
            where: {
                champion: champion,
            },
        });

        if (!vods) {
            throw new Error("Invalid champion");
        }

        return NextResponse.json({ vods, status: 200 });
    } catch (error) {
        return NextResponse.json({ error, status: 400 });
    }
}
