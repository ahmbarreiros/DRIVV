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
        <div className="flex flex-columns">
            <div></div>
            {transformedPrimary?.map((rune) => (
                <img width={"48px"} src={rune} alt="" />
            ))}
            {transformedSecondary?.map((rune) => (
                <img width={"48px"} src={rune} alt="" />
            ))}
            {transformedAdaptative?.map((rune) => (
                <img width={"32px"} src={rune} alt="" />
            ))}
        </div>
    );
};
export default RunePage;
