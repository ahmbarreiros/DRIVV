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
        params: { role: string };
        searchParams: { [key: string]: string | string[] | undefined };
    }
) {
    try {
        // await serverAuth(req);
        const role = params?.role;

        if (typeof role !== "string") {
            throw new Error("Invalid Role");
        }
        if (!role) {
            throw new Error("Invalid Role");
        }
        const vods = await prismadb.vOD.findMany({
            where: {
                role: role,
            },
        });

        if (!vods) {
            throw new Error("Invalid Role");
        }

        return NextResponse.json({ vods, status: 200 });
    } catch (error) {
        return NextResponse.json({ error, status: 400 });
    }
}
