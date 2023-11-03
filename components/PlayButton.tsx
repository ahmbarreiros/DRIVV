import React from "react";
import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
    vodId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ vodId }) => {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                router.push(`/watch/${vodId}`);
            }}
            className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center justify-center hover:bg-neutral-300 transition duration"
        >
            <BsFillPlayFill size={15} className="mr-1" />
            Play
        </button>
    );
};

export default PlayButton;
