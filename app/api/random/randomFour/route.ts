import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const allVods = await prismadb.vOD.findMany({
            distinct: ["id"],
        });
        const shuffledVods = allVods.sort(() => Math.random() - 0.5);
        const randomVods = shuffledVods.slice(0, 4);

        return NextResponse.json({
            vods: randomVods,
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error, status: 400 });
    }
}
