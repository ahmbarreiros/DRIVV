import React from "react";

interface RunePageProps {
    runes?: Array<String>;
}

const RunePage: React.FC<RunePageProps> = ({ runes }) => {
    return (
        <div>
            <h1 className="text-white">{runes}</h1>
        </div>
    );
};
export default RunePage;
