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
        <div className="flex flex-col justify-center items-center select-none">
            <div className="flex flex-row">
                {transformedPrimary?.map((rune) => (
                    <img width={"64px"} src={rune} alt="" />
                ))}
            </div>
            <div className="flex flex-row">
                {transformedSecondary?.map((rune) => (
                    <img width={"48px"} src={rune} alt="" />
                ))}
            </div>
            <div className="flex flex-row">
                {transformedAdaptative?.map((rune) => (
                    <img width={"32px"} className="" src={rune} alt="" />
                ))}
            </div>
        </div>
    );
};
export default RunePage;
