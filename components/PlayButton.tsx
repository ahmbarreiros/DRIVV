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
            className={`bg-zinc rounded-full py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center justify-center hover:bg-neutral-300 transition duration ${className}`}
        >
            <BsFillPlayFill size={25} className="text-white" />
        </button>
    );
};

export default PlayButton;
