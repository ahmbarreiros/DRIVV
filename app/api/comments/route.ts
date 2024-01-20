import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function POST(req: Request) {
    try {
        const user = await serverAuth(req);
        const data = await req.json();
        NextResponse.json({ user, data, status: 200 });
    } catch (error) {
        NextResponse.json({ error, status: 405 });
    }
}
