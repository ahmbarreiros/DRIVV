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
        console.log(type);

        if (type && typeof type !== "string") {
            throw new Error("Invalid type");
        }
        const vodCount = await prismadb.vOD.count();
        const randomIndex = Math.floor((Math.random() * vodCount) / 2);
        if (!type) {
            throw new Error("Invalid type");
        } else {
            const randomVods = await prismadb.vOD.findMany({
                where: {
                    OR: [{ champion: type }, { role: type }],
                },
                take: 4,
                skip: randomIndex,
                distinct: ["id"],
            });
            return NextResponse.json({ vods: randomVods, status: 200 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error, status: 400 });
    }
}
