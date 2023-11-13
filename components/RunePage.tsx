import React from "react";
import { runeMapping } from "@/lib/runeMapping";

interface RunePageProps {
    primaryRunes?: Array<string>;
    secondaryRunes?: Array<string>;
    adaptativeRunes?: Array<string>;
}

const RunePage: React.FC<RunePageProps> = ({
    primaryRunes,
    secondaryRunes,
    adaptativeRunes,
}) => {
    const transformedPrimary = primaryRunes?.map(
        (rune) => runeMapping[rune] || rune
    );
    const transformedSecondary = secondaryRunes?.map(
        (rune) => runeMapping[rune] || rune
    );
    const transformedAdaptative = adaptativeRunes?.map(
        (rune) => runeMapping[rune] || rune
    );

    return (
        <div>
            <h1>Runas</h1>
            {transformedPrimary?.map((rune) => (
                <img src={rune} alt="" />
            ))}
            {transformedSecondary?.map((rune) => (
                <img src={rune} alt="" />
            ))}
            {transformedAdaptative?.map((rune) => (
                <img src={rune} alt="" />
            ))}
        </div>
    );
};
export default RunePage;
