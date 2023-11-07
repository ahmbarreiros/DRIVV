import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    const vods = await prismadb.vOD.findMany();
    const championTypeObject = {};

    vods.forEach((element: any) => {
        element.championType.forEach((type: string) => {
            if (!(type in championTypeObject)) {
                (championTypeObject as any)[type] = [element];
            } else {
                (championTypeObject as any)[type].push(element);
            }
        });
    });
    if (!championTypeObject) {
        throw new Error("Invalid champion types");
    }
    return NextResponse.json({ status: 200, championTypeObject });
}
