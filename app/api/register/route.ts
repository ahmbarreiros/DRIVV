import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, password } = data;

        //   TODO(alb): handle username/email/password undefined better later.
        if (typeof email !== "string")
            return NextResponse.json(
                { error: "Invalid email" },
                { status: 422 }
            );

        const duplicateUser = await prismadb.user.findUnique({
            where: {
                email: email,
            },
        });

        if (duplicateUser) {
            console.log("duplicate user");

            return NextResponse.json(
                { error: "Email already taken." },
                { status: 422 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 16);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: "",
                emailVerified: new Date(),
            },
        });

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        // TODO(alb): Change this for prod!
        console.log(error);
        return NextResponse.json(error, { status: 400 });
    }
}
