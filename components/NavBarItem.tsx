import React from "react";
import { useRouter } from "next/navigation";

interface NavBarItemProps {
    label: string;
    redirection?: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ label, redirection }) => {
    const router = useRouter();
    return (
        <div
            onClick={() => {
                redirection ? router.push(redirection) : "";
            }}
            className="text-white cursor-pointer hover:text-gray-300 transition"
        >
            {label}
        </div>
    );
};
export default NavBarItem;
