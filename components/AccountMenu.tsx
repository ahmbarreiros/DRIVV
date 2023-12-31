import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    const { data } = useCurrentUser();

    if (!visible) {
        return null;
    }
    return (
        <div className="bg-black/90 w-60 absolute md:top-14 top-10 right-0 py-5 flex-col border-2 border-gray-800 flex border-t-[#fa7f1a] border-t-[3px] hover:bg-black transition duration-300">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img
                        className="w-8 rounded-md"
                        src="/images/logo.png"
                        alt="logo"
                    />
                    <p className="text-white text-sm group-hover/item:underline">
                        {data?.currentUser?.name}
                    </p>
                </div>
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full justify-start ml-11">
                    <p className="text-white text-sm group-hover/item:underline ">
                        My Library
                    </p>
                </div>
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full justify-start ml-11">
                    <p className="text-white text-sm group-hover/item:underline ">
                        Account Settings
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div
                    onClick={() => signOut()}
                    className="px-3 text-center text-white text-sm hover:underline"
                >
                    Sign out
                </div>
            </div>
        </div>
    );
};
export default AccountMenu;
