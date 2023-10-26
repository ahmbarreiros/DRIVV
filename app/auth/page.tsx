"use client";
import { SetStateAction, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="relative h-full w-full bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            {/* TODO(alb): change opacity on large screens?*/}
            <div className="bg-black w-full h-full bg-opacity-70">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-48" />
                </nav>
                <div className="flex justify-center">
                    {/* TODO(alb): change width on large screens?*/}
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                label="Username"
                                onChange={(event: {
                                    /* quick fix for parameter of type any*/
                                    target: { value: SetStateAction<string> };
                                }) => {
                                    setUsername(event.target.value);
                                }}
                                id="username"
                                value={username}
                            />
                            <Input
                                label="Email"
                                onChange={(event: {
                                    /* quick fix for parameter of type any*/
                                    target: { value: SetStateAction<string> };
                                }) => {
                                    setEmail(event.target.value);
                                }}
                                id="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(event: {
                                    /* quick fix for parameter of type any*/
                                    target: { value: SetStateAction<string> };
                                }) => {
                                    setPassword(event.target.value);
                                }}
                                id="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-cyan-600 py-3 text-white rounded-md w-full mt-10 hover:bg-cyan-700 transition">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Auth;
