import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { currentUser } = await serverAuth(req);

        return NextResponse.json({ status: 200, currentUser });
    } catch (error) {
        return NextResponse.json({ status: 400, error });
    }
}
