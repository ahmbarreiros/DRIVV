import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavBarItem from "./NavBarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const NavBar = () => {
    const [brosweVisibility, setBrowseVisibility] = useState(false);
    const [accountVisibility, setAccountVisibility] = useState(false);
    const [backgroundVisibility, setBackgroundVisibility] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                componentRef.current &&
                !componentRef.current.contains(event.target as Node)
            ) {
                setBrowseVisibility(false);
                setAccountVisibility(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setBackgroundVisibility(true);
            } else {
                setBackgroundVisibility(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className="w-full fixed z-40 select-none" ref={componentRef}>
            <div
                className={`px-4 md:px-16 py-2 flex flex-row items-center transition duration-500 ${
                    backgroundVisibility ? "bg-zinc-900/90" : ""
                }`}
            >
                <img
                    className="h-10 lg:h-14"
                    src="/images/logo.png"
                    alt="logo"
                />
                {/* TODO(alb): Change width where it changes visibility later */}
                <div className="flex-row ml-8 gap-7 hidden md:flex">
                    <NavBarItem label="Home" />
                    <NavBarItem label="Top" />
                    <NavBarItem label="Jungle" />
                    <NavBarItem label="Mid" />
                    <NavBarItem label="Bot" />
                    <NavBarItem label="My Library" />
                    <NavBarItem label="Browse by Region" />
                </div>
                <div
                    // TODO(alb): maybe set this differently if necessary.
                    onClick={() => setBrowseVisibility(!brosweVisibility)}
                    className="md:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
                >
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown
                        className={`text-white transition duration-300 ${
                            brosweVisibility ? "rotate-180" : "rotate-0"
                        }`}
                    />
                    <MobileMenu visible={brosweVisibility} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="flex items-center gap-1 text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch className="h-5 w-5" />
                    </div>
                    <div
                        // TODO(alb): maybe set this differently if necessary.
                        // TODO(alb): could change this to when hover?
                        onClick={() => setAccountVisibility(!accountVisibility)}
                        className="flex flex-row items-center gap-2 cursor-pointer relative"
                    >
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/logo.png" alt="image" />
                        </div>
                        <BsChevronDown
                            className={`text-white transition duration-300 ${
                                accountVisibility ? "rotate-180" : "rotate-0"
                            }`}
                        />
                        <AccountMenu visible={accountVisibility} />
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
