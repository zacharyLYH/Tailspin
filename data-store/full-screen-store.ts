import { create } from "zustand";

interface FullScreenStore {
    fullScreen: boolean;
    toggleFullScreen: () => void;
}

const useToggleFullScreen = create<FullScreenStore>((set) => ({
    fullScreen: false,
    toggleFullScreen: () => set((state) => ({ fullScreen: !state.fullScreen })),
}));

export default useToggleFullScreen;
