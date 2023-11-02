import { NextResponse } from "next/server";
import { without } from "lodash";
import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import serverAuth from "@/lib/serverAuth";

export async function handler(req: Request) {
    try {
        const { currentUser } = await serverAuth(req);

        const { vodId } = await req.json();
        const existingVOD = await prismadb.vOD.findUnique({
            where: {
                id: vodId,
            },
        });
        if (!existingVOD) {
            throw new Error("Invalid ID");
        }
        if (req.method === "POST") {
            const user = await prismadb.user.update({
                where: {
                    email: currentUser.email || "",
                },
                data: {
                    favoriteIds: {
                        push: vodId,
                    },
                },
            });

            return NextResponse.json({ user, status: 200 });
        }
        if (req.method === "DELETE") {
            const updatedFavoriteIds = without(currentUser.favoriteIds, vodId);
            const updatedUser = await prismadb.user.update({
                where: {
                    email: currentUser.email || "",
                },
                data: {
                    favoriteIds: updatedFavoriteIds,
                },
            });
            return NextResponse.json({ status: 200, updatedUser });
        }
    } catch (error) {
        return NextResponse.json({ error: error, status: 400 });
    }
}

export { handler as POST, handler as DELETE };
