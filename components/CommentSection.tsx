import { useSession } from "next-auth/react";
import Input from "./Input";
import Comment from "./Comment";
import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

const CommentSection = ({ comments }: any) => {
    const [input, setInput] = useState("");
    const [submited, setSubmited] = useState(false);
    const { data: session } = useSession();

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        setSubmited(true);
    };

    const handleChange = (e: any) => {
        setInput(e);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl mt-5">Comments</h1>
            <div className="comments-wrapper">
                {comments?.map((comment: any, id: any) => {
                    return <Comment key={id} comment={comment} />;
                })}
            </div>
            <div className="input-comment-wrapper flex flex-row justify-end items-center">
                <textarea
                    className="p-3 bg-gradient-to-br from-zinc-800 to-zinc-900 w-[50vw] h-[7vw] rounded-md m-auto my-3 shadow-md focus:border-zinc-900 focus:border-2 focus:outline-none focus:animate-pulse focus:caret-white text-white text-xl resize-none"
                    placeholder="Give matchup hints and tips..."
                    maxLength={225}
                    onChange={(e) => handleChange(e.target.value)}
                ></textarea>
                <button className="absolute text-white text-xl p-3">
                    <BiSolidRightArrow />
                </button>
            </div>
        </div>
    );
};
export default CommentSection;
