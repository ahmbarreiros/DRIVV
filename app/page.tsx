"use client";
import NavBar from "@/components/NavBar";
import Billboard from "@/components/Billboard";
import VODList from "@/components/VODList";
import useRandomList from "@/hooks/useRandomList";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModel";
import useRandomTypeList from "@/hooks/useRandomTypeList";
import Footer from "@/components/Footer";

export default function Home() {
    const { data: vods = [], isLoading } = useRandomList();
    const { isOpen, closeModal } = useInfoModal();
    const { data: top = [] } = useRandomTypeList("Top");
    const { data: jg = [] } = useRandomTypeList("Jungle");
    const { data: mid = [] } = useRandomTypeList("Mid");
    const { data: bot = [] } = useRandomTypeList("Bot");
    const { data: support = [] } = useRandomTypeList("Support");

    if (isLoading) {
        return (
            <main className="select-none">
                <InfoModal visible={isOpen} onClose={closeModal} />
                <NavBar />
                <Billboard />
                <div className=" h-auto min-h-[100vh] bg-gradient-to-br from-zinc-900 from-60% to-[#80320e]">
                    {" "}
                    <div className="lg:pt-10" id="vods-container">
                        <div className="px-4 md:px-12 mt-4 space-y-8">
                            <div className="lg:pb-40">
                                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                                    VODs
                                </p>
                                <div className="grid grid-cols-4 gap-3">
                                    <div className="group bg-[zinc-900] col-span relative h-[12vw]">
                                        <div className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-500 w-full h-[12vw] animate-pulse bg-gradient-to-tr from-zinc-800 to-zinc-900"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="select-none">
            <InfoModal visible={isOpen} onClose={closeModal} />
            <NavBar />
            <Billboard />
            <div className=" h-auto min-h-[100vh] bg-gradient-to-br from-zinc-900 from-60% to-[#80320e]">
                {" "}
                <div className="lg:pt-10 lg:pb-40" id="vods-container">
                    <VODList
                        title="VODs"
                        data={vods.vods}
                        isLoading={isLoading}
                    />
                    <VODList title="Top" data={top.vods} />
                    <VODList title="Jungle" data={jg.vods} />
                    <VODList title="Mid" data={mid.vods} />
                    <VODList title="Bot" data={bot.vods} />
                    <VODList title="Support" data={support.vods} />
                </div>
                <Footer className="pb-10" />
            </div>
        </main>
    );
}
