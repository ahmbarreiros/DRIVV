import { ImageResponse } from "next/server";

export const size = { width: 32, height: 32 };

const Icon = () => {
    return new ImageResponse(
        (
            <div
                className="justify-center items-center h-10 lg:h-14 text-white font-bold text-2xl align-center shadow-xl"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#f25f1b",
                    borderRadius: "50%",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 24,
                }}
            >
                D
            </div>
        ),
        {
            ...size,
        }
    );
};
export default Icon;
