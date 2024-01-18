"use client";
import InfoModal from "@/components/InfoModal";
import NavBar from "@/components/NavBar";
import VODList from "@/components/VODList";
import useInfoModal from "@/hooks/useInfoModel";
import useChampionList from "@/hooks/useChampionList";

const Champion = ({
    params,
    searchParams,
}: {
    params: { champion: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const { isOpen, closeModal } = useInfoModal();
    const champion = params?.champion;

    const { data: vods = [], isLoading } = useChampionList(champion);
    if (isLoading) {
        return (
            <main>
                <InfoModal visible={isOpen} onClose={closeModal} />
                <NavBar />
                <div
                    className="relative lg:pt-40 pt-20 pb-40 bg-gradient-to-br from-zinc-900 from-60% to-[#80320e] h-auto min-h-[100vh]"
                    id="vods-container select-none"
                >
                    (
                    <VODList
                        title="Loading..."
                        data={vods?.vods}
                        isLoading={isLoading}
                    />
                    )
                </div>
            </main>
        );
    }
    console.log(vods);
    const length = vods.vods.length;
    vods.vods = vods.vods.slice(0, 20);

    return (
        <main>
            <InfoModal visible={isOpen} onClose={closeModal} />
            <NavBar />
            <div
                className="relative lg:pt-40 pt-20 pb-40 bg-gradient-to-br from-zinc-900 from-60% to-[#80320e] h-auto min-h-[100vh]"
                id="vods-container"
            >
                {length != 0 ? (
                    <VODList
                        title={vods?.vods[0]?.champion + " Vods"}
                        data={vods?.vods}
                    />
                ) : (
                    <h1 className="text-white text-xl text-center h-[100vh] overflow-y-hidden">
                        Nothing to see here yet...
                    </h1>
                )}
            </div>
        </main>
    );
};
export default Champion;
