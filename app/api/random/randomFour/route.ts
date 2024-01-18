import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const vodCount = await prismadb.vOD.count();
        console.log(vodCount);

        const randomIndex = Math.floor((Math.random() * vodCount) / 2);
        const randomVods = await prismadb.vOD.findMany({
            take: 4,
            skip: randomIndex,
            distinct: ["id"],
        });

        return NextResponse.json({
            vods: randomVods,
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error, status: 400 });
    }
}
