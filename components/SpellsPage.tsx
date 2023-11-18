import React from "react";
import { sumonnerMapping } from "@/lib/sumonnerMapping";

interface SpellsPageProps {
    summonerSpells?: Array<string>;
}

const SpellsPage: React.FC<SpellsPageProps> = ({ summonerSpells }) => {
    const transformedSpells = summonerSpells?.map(
        (spell) => sumonnerMapping[spell] || spell
    );
    console.log(transformedSpells);

    return (
        <div className="flex flex-col justify-center items-center select-none">
            <div className="flex flex-row">
                {transformedSpells?.map((rune) => (
                    <img width={"64px"} src={rune} alt="" />
                ))}
            </div>
        </div>
    );
};
export default SpellsPage;
