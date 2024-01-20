import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavBarItem from "./NavBarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

const TOP_OFFSET = 66;

const NavBar = () => {
    const [brosweVisibility, setBrowseVisibility] = useState(false);
    const [accountVisibility, setAccountVisibility] = useState(false);
    const [backgroundVisibility, setBackgroundVisibility] = useState(false);
    const [results, setResults] = useState([]);
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
                className={`px-4 md:px-15 py-2 flex flex-row items-center transition duration-500 ${
                    backgroundVisibility ? "bg-zinc-900/90" : ""
                }`}
            >
                <div className="flex justify-center items-center h-10 lg:h-14 ">
                    <h1 className="text-white font-bold text-2xl align-center shadow-xl">
                        DRIVV.<span className="text-[#f25f1b]">gg</span>
                    </h1>
                </div>
                {/* TODO(alb): Change width where it changes visibility later */}
                <div className="flex-row ml-5 gap-7 hidden md:flex">
                    <NavBarItem label="Inicio" redirection="/" />
                    <NavBarItem label="Top" redirection="/roles/Top" />
                    <NavBarItem label="Jungle" redirection="/roles/Jungle" />
                    <NavBarItem label="Mid" redirection="/roles/Mid" />
                    <NavBarItem label="Bot" redirection="/roles/Bot" />
                    <NavBarItem label="Support" redirection="/roles/Support" />
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
                    <div className="flex items-center gap-1 text-gray-200 cursor-pointer transition">
                        <div className="search-bar-container flex flex-col col items-center justify-center">
                            <SearchBar setResults={setResults} />
                            <SearchResultsList results={results} />
                        </div>
                        <button>
                            <BsSearch className="h-5 w-5" />
                        </button>
                    </div>
                    {/* <div
                        // TODO(alb): maybe set this differently if necessary.
                        // TODO(alb): could change this to when hover?
                        onClick={() => setAccountVisibility(!accountVisibility)}
                        className="flex flex-row items-center gap-2 cursor-pointer relative"
                    >
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/logo.png" alt="image" />
                        </div>
                        {/* <BsChevronDown
                            className={`text-white transition duration-300 ${
                                accountVisibility ? "rotate-180" : "rotate-0"
                            }`}
                        />
                        <AccountMenu visible={accountVisibility} />
                    </div> */}
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
