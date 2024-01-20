"use client";
import { useCallback, useState } from "react";
import Input from "@/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitch } from "react-icons/fa";

const Auth = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [account, setAccount] = useState("login");

    const toggleAccount = useCallback(() => {
        setAccount((currentState) =>
            currentState == "login" ? "register" : "login"
        );
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn("credentials", {
                email,
                password,
                redirect: false,
                callbackUrl: "/",
            });

            router.push("/");
        } catch (error) {
            // TODO(alb): change this for production!
            console.log(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            await axios.post("/api/register", {
                email,
                name,
                password,
            });

            login();
        } catch (error) {
            // TODO(alb): change this for production!
            console.log(error);
        }
    }, [email, name, password, login]);

    return (
        // TODO(alb): Center logo?

        <div className="relative min-h-[100vh] h-auto w-auto bg-zinc-800 m-0">
            {/* TODO(alb): change opacity on large/medium screens?*/}
            <div className="bg-black w-auto h-auto md:bg-opacity-70 h-screen">
                <div className="relative flex flex-row justify-center m-auto">
                    {/* TODO(alb): change width on large screens?*/}
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md md:w-3/5 rounded-md w-full h-auto">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {account == "login" ? "Sign in" : "Register"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {account == "register" && (
                                <Input
                                    label="Name"
                                    onChange={(event: any) => {
                                        setName(event.target.value);
                                    }}
                                    id="name"
                                    value={name}
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
                            onClick={account == "login" ? login : register}
                            className="bg-cyan-600 py-3 text-white rounded-md w-full mt-10 hover:bg-cyan-700 transition"
                        >
                            {account == "login" ? "Login" : "Sign up"}
                        </button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div
                                onClick={() => {
                                    signIn("google", {
                                        callbackUrl: "/",
                                    });
                                }}
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                            >
                                <FcGoogle size={30} />
                            </div>
                            <div
                                onClick={() => {
                                    signIn("github", { callbackUrl: "/" });
                                }}
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                            >
                                <FaGithub size={30} />
                            </div>
                            <div
                                onClick={() => {
                                    signIn("twitch", { callbackUrl: "/" });
                                }}
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition color-purple"
                            >
                                <FaTwitch color={"purple"} size={25} />
                            </div>
                        </div>
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
