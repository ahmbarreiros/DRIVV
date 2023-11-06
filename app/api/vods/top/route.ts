import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        const vods = await prismadb.vOD.findMany({
            where: {
                lanePlayed: "Top",
            },
        });
        if (!vods) {
            throw new Error("Vods are empty");
        }
        return NextResponse.json({ status: 200, vods });
    } catch (error) {
        return NextResponse.json({ status: 400, error });
    }
}
