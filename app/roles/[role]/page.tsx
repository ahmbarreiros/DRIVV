"use client";
import InfoModal from "@/components/InfoModal";
import NavBar from "@/components/NavBar";
import VODList from "@/components/VODList";
import useInfoModal from "@/hooks/useInfoModel";
import useRoleList from "@/hooks/useRoleList";

const Roles = ({
    params,
    searchParams,
}: {
    params: { role: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const { isOpen, closeModal } = useInfoModal();
    const role = params?.role;
    console.log(role);

    const { data: vods, isLoading } = useRoleList(role);
    console.log(vods);
    if (isLoading) {
        return <h1>Waiting...</h1>;
    }
    console.log(vods);
    const length = vods.vods.length;
    console.log(length == 0);

    return (
        <main>
            <InfoModal visible={isOpen} onClose={closeModal} />
            <NavBar />
            <div
                className="relative pt-40 pb-40 bg-gradient-to-br from-zinc-900 from-60% to-[#3b1159] h-full"
                id="vods-container"
            >
                {length != 0 ? (
                    <VODList
                        title={vods?.vods[0]?.role + " Vods"}
                        data={vods?.vods}
                    />
                ) : (
                    <h1 className="text-white text-xl text-center h-[58vh] overflow-y-hidden">
                        Nothing to see here yet...
                    </h1>
                )}
            </div>
        </main>
    );
};
export default Roles;
