import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET(
    req: Request,
    {
        params,
        searchParams,
    }: {
        params: { vodId: string };
        searchParams: { [key: string]: string | string[] | undefined };
    }
) {
    try {
        // await serverAuth(req);
        const vodId = params?.vodId;

        if (typeof vodId !== "string") {
            throw new Error("Invalid ID");
        }
        if (!vodId) {
            throw new Error("Invalid ID");
        }
        const vod = await prismadb.vOD.findUnique({
            where: {
                id: vodId,
            },
        });

        if (!vod) {
            throw new Error("Invalid ID");
        }

        return NextResponse.json({ vod, status: 200 });
    } catch (error) {
        return NextResponse.json({ error, status: 400 });
    }
}
