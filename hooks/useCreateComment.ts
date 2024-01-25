"use client";
import useSwr from "swr";
import poster from "@/lib/poster";
import { useState } from "react";
import fetcher from "@/lib/fetcher";

const useCreateComment = () => {
    const [text, setText] = useState("");

    const { data: comments, mutate } = useSwr<Comment[]>(
        "/api/comment/get",
        fetcher,
        {
            fallbackData: [],
        }
    );

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch("/api/comment/post", {
                method: "POST",
                body: JSON.stringify({ text }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setText("");
            await mutate();
        } catch (error) {
            // console.log(error);
        }
    };

    const onDelete = async (comment: Comment) => {
        try {
            await fetch("/api/comment/delete", {
                method: "POST",
                body: JSON.stringify({ comment }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            await mutate();
        } catch (error) {
            // console.log(error);
        }
    };
    return { text, setText, comments, onSubmit, onDelete };
};

export default useCreateComment;
