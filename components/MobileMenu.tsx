import React from "react";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    const router = useRouter();
    if (!visible) {
        return null;
    }
    return (
        <div className="bg-black/90 w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 border-t-[#fa7f1a] border-t-[3px] flex hover:bg-black transition duration-300">
            <div className="flex flex-col gap-3.5">
                <div
                    className="px-3 text-center text-white hover:text-gray-400"
                    onClick={() => router.push("/")}
                >
                    Home
                </div>
                <div
                    className="px-3 text-center text-white hover:text-gray-400"
                    onClick={() => router.push("/roles/Top")}
                >
                    Top
                </div>
                <div
                    className="px-3 text-center text-white hover:text-gray-400"
                    onClick={() => router.push("/roles/Jungle")}
                >
                    Jungle
                </div>
                <div
                    className="px-3 text-center text-white hover:text-gray-400"
                    onClick={() => router.push("/roles/Mid")}
                >
                    Mid
                </div>
                <div
                    className="px-3 text-center text-white hover:text-gray-400"
                    onClick={() => router.push("/roles/Bot")}
                >
                    Bot
                </div>
                <div
                    className="px-3 text-center text-white hover:text-gray-400"
                    onClick={() => router.push("/roles/Support")}
                >
                    Support
                </div>
            </div>
        </div>
    );
};
export default MobileMenu;
