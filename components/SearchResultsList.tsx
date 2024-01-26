"use client";
import SearchResult from "./SearchResult";
import { FaLocationArrow } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchResultsList = ({ results }: any) => {
    const router = useRouter();
    if (!results) {
        return null;
    }

    const randomResults = results.sort(() => Math.random() - 0.5);
    results = randomResults.slice(0, 4);

    return (
        <div className="results-list absolute lg:top-[45px] md:ml-3 top-[35px] lg:mr-2 w-[30vw] z-index-9 bg-zinc-800 shadow-md pl-[8px] py-1 rounded-b-md flex flex-col items-center">
            {results[0]?.champion ? (
                <div
                    className="championResult flex flex-row justify-center items-center gap-1 text-center mt-4 border-b-2 border-b-white hover:text-gray-300 text-sm md:text-md"
                    onClick={() => {
                        router.push(`/champion/${results[0].champion}`);
                    }}
                >
                    <FaLocationArrow size={10} />
                    <h4>{results[0]?.champion} VODs</h4>
                </div>
            ) : (
                ""
            )}
            {results.map((result: any, id: any) => {
                return <SearchResult key={id} result={result} />;
            })}
        </div>
    );
};
export default SearchResultsList;
