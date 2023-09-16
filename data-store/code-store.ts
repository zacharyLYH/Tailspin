// codeStore.ts
import { create } from "zustand";

interface CodeStore {
    code: string;
    setCode: (newCode: string) => void;
}

const useCodeStore = create<CodeStore>((set) => ({
    code: `<!--Use the code formatter 👆 to neaten your code-->

    <!--You'll write code in this code editor-->
    <div class="flex items-center justify-center h-screen">
      <p class="text-2xl font-semibold relative z-10 shadow-lg rounded-full p-2">
        👈 Start writing HTML and Tailwind in the
        <span class="text-green-500">Editor</span>
      </p>
    </div>
    
    <!--See the results of your code in the preview on the right 👉-->`,
    setCode: (newCode) => set({ code: newCode }),
}));

export default useCodeStore;
