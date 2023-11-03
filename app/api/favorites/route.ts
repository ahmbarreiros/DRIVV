import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

import serverAuth from "@/lib/serverAuth";

export async function GET(req: Request) {
    try {
        const { currentUser } = await serverAuth(req);

        const favoriteVODs = await prismadb.vOD.findMany({
            where: {
                id: {
                    in: currentUser?.favoriteIds,
                },
            },
        });

        return NextResponse.json({ status: 200, favoriteVODs });
    } catch (error) {
        return NextResponse.json({ status: 400, error });
    }
}
