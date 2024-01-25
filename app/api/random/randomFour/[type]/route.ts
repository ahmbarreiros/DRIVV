import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    {
        params,
        searchParams,
    }: {
        params: { type: string };
        searchParams: { [key: string]: string | string[] | undefined };
    }
) {
    try {
        const type = params?.type;

        if (type && typeof type !== "string") {
            throw new Error("Invalid type");
        }
        if (!type) {
            throw new Error("Invalid type");
        } else {
            const allVods = await prismadb.vOD.findMany({
                where: {
                    OR: [{ champion: type }, { role: type }],
                },
                distinct: ["id"],
            });
            const shuffledVods = allVods.sort(() => Math.random() - 0.5);
            const randomVods = shuffledVods.slice(0, 4);
            return NextResponse.json({
                vods: randomVods,
                status: 200,
            });
        }
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error, status: 400 });
    }
}
