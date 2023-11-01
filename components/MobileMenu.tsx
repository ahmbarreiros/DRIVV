import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }
    return (
        <div className="bg-black/90 w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 border-t-[#fff] border-t-[3px] flex hover:bg-black transition duration-300">
            <div className="flex flex-col gap-3.5">
                <div className="px-3 text-center text-white hover:text-gray-400">
                    Home
                </div>
                <div className="px-3 text-center text-white hover:text-gray-400">
                    VODs
                </div>
                <div className="px-3 text-center text-white hover:text-gray-400">
                    Top
                </div>
                <div className="px-3 text-center text-white hover:text-gray-400">
                    Mid
                </div>
                <div className="px-3 text-center text-white hover:text-gray-400">
                    Bot
                </div>
                <div className="px-3 text-center text-white hover:text-gray-400">
                    New & Popular
                </div>
                <div className="px-3 text-center text-white hover:text-gray-400">
                    My Library
                </div>
                <div className="px-3 text-center text-white hover:text-gray-400">
                    Browse by Region
                </div>
            </div>
        </div>
    );
};
export default MobileMenu;
