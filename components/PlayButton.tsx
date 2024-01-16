import React from "react";
import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
    vodId: string;
    className?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ vodId, className }) => {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                router.push(`/watch/${vodId}`);
            }}
            className={`${className}`}
        >
            <BsFillPlayFill className="w-30" />
        </button>
    );
};

export default PlayButton;
