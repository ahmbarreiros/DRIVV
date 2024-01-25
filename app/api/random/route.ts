import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        // TODO(alb): do auth later
        const vodCount = await prismadb.vOD.count();
        const randomIndex = Math.floor(Math.random() * vodCount);
        const randomVods = await prismadb.vOD.findMany({
            take: 1,
            skip: randomIndex,
        });

        return NextResponse.json({ value: randomVods[0], status: 200 });
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error, status: 400 });
    }
}
