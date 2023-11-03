import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        // TODO(alb): do auth later
        const vods = await prismadb.vOD.findMany();

        return NextResponse.json({ vods, status: 200 });
    } catch (error) {
        return NextResponse.json({ error, status: 400 });
    }
}
