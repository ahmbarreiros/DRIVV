"use client";
import { SetStateAction, useCallback, useState } from "react";
import Input from "@/components/Input";
import axios from "axios";
import { log } from "console";
import { signIn } from "next-auth/react";

const Auth = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [account, setAccount] = useState("login");

    const toggleAccount = useCallback(() => {
        setAccount((currentState) =>
            currentState == "login" ? "register" : "login"
        );
    }, []);

    const register = useCallback(async () => {
        try {
            await axios.post("/api/register", {
                email,
                username,
                password,
            });
        } catch (error) {
            // TODO(alb): change this for production!
            console.log(error);
        }
    }, [email, username, password]);

    return (
        <div className="relative h-full w-full bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            {/* TODO(alb): change opacity on large/medium screens?*/}
            <div className="bg-black w-full h-full md:bg-opacity-70">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-48" />
                </nav>
                <div className="flex justify-center">
                    {/* TODO(alb): change width on large screens?*/}
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md md:w-3/5 rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {account == "login" ? "Sign in" : "Register"}
                        </h2>

                        <div className="flex flex-col gap-4">
                            {account == "register" && (
                                <Input
                                    label="Username"
                                    onChange={(event: any) => {
                                        setUsername(event.target.value);
                                    }}
                                    id="username"
                                    value={username}
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(event: any) => {
                                    setEmail(event.target.value);
                                }}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(event: any) => {
                                    setPassword(event.target.value);
                                }}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button
                            onClick={register}
                            className="bg-cyan-600 py-3 text-white rounded-md w-full mt-10 hover:bg-cyan-700 transition"
                        >
                            {account == "login" ? "Login" : "Sign up"}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {account == "login"
                                ? "First time using Drivv?"
                                : "Already have an account?"}
                            <span
                                onClick={toggleAccount}
                                className="text-white ml-1 hover:underline cursor-pointer"
                            >
                                {account == "login"
                                    ? "Create an account"
                                    : "Sign in"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Auth;
