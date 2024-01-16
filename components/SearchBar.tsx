import useVODList from "@/hooks/useVODList";
import { useState } from "react";

const SearchBar = ({ setResults }: any) => {
    const [input, setInput] = useState("");
    const { data: vods, isLoading } = useVODList();
    if (!isLoading) {
    }
    const fetchData = (value: any) => {
        const results = vods.vods.filter((vod: any) => {
            return (
                value &&
                vod &&
                vod.title &&
                vod.champion.toLowerCase().includes(value)
            );
        });
        setResults(results);
    };
    const handleChange = (value: any) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="input-wrapper">
            <input
                value={input}
                type="text"
                placeholder="Search..."
                className="relative lg:mr-2 md:ml-3 w-[30vw] z-10 bg-zinc-800 shadow-md pl-[8px] py-1 rounded-md flex items-center focus:border-none focus:outline-none"
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
export default SearchBar;
