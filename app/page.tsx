"use client";
import NavBar from "@/components/NavBar";
import Billboard from "@/components/Billboard";
import VODList from "@/components/VODList";
import useRandomList from "@/hooks/useRandomList";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModel";
import useRandomTypeList from "@/hooks/useRandomTypeList";
import Footer from "@/components/Footer";
import { isEmpty } from "lodash";

export default function Home() {
    const { data: vods = [], isLoading } = useRandomList();
    const { isOpen, closeModal } = useInfoModal();
    const { data: top = [] } = useRandomTypeList("Top");
    const { data: jg = [] } = useRandomTypeList("Jungle");
    const { data: mid = [] } = useRandomTypeList("Mid");
    const { data: bot = [] } = useRandomTypeList("Bot");
    const { data: support = [] } = useRandomTypeList("Support");

    if (isEmpty(vods)) {
        return (
            <main className="select-none">
                <InfoModal visible={isOpen} onClose={closeModal} />
                <NavBar />
                <Billboard />
                <div className=" h-auto min-h-[100vh] bg-gradient-to-br from-zinc-900 from-60% to-[#80320e]">
                    <VODList
                        data={vods}
                        title={vods?.title}
                        isLoading={isLoading}
                    />
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
