import { create } from "zustand";

interface CodeAreaStore {
    mosaicThemeDark: boolean;
    setMosaicThemeDark: () => void;
    aceEditorTheme: string;
    setAceEditorTheme: (themeName: string) => void;
    reset: () => void;
    fontSize: number;
    setFontSize: (size: number) => void;
}

const useCodeAreaStore = create<CodeAreaStore>((set) => ({
    mosaicThemeDark: true,
    setMosaicThemeDark: () =>
        set((state) => ({ mosaicThemeDark: !state.mosaicThemeDark })),
    aceEditorTheme: "monokai",
    setAceEditorTheme: (themeName: string) => {
        set({ aceEditorTheme: themeName });
    },
    reset: () => {
        set({ mosaicThemeDark: true, aceEditorTheme: "monokai" });
    },
    fontSize: 14,
    setFontSize: (size: number) => set({ fontSize: size }),
}));

export default useCodeAreaStore;
