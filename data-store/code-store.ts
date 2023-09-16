// codeStore.ts
import { create } from "zustand";

interface CodeStore {
    code: string;
    setCode: (newCode: string) => void;
}

const useCodeStore = create<CodeStore>((set) => ({
    code: "<div class='bg-blue-500'>Hello</div>",
    setCode: (newCode) => set({ code: newCode }),
}));

export default useCodeStore;
