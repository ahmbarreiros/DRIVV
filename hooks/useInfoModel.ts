import { create } from "zustand";

export interface ModalStoreInterface {
    vodId?: string;
    isOpen: boolean;
    openModal: (vodId: string) => void;
    closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
    vodId: undefined,
    isOpen: false,
    openModal: (vodId: string) =>
        set({
            isOpen: true,
            vodId,
        }),
    closeModal: () =>
        set({
            isOpen: false,
            vodId: undefined,
        }),
}));

export default useInfoModal;
