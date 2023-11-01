import { create } from "zustand";

interface StepperStore {
    progress: number;
    setProgress: (newProgress: number) => void;
    step: number;
    setStep: (newStep: number) => void;
    email: string;
    setEmail: (newEmail: string) => void;
    check: boolean;
    setCheck: (newCheck: boolean) => void;
}

const useStepperStore = create<StepperStore>((set) => ({
    progress: 0,
    setProgress: (newProgress) => set({ progress: newProgress }),
    step: 1,
    setStep: (newStep) => set({ step: newStep }),
    email: "",
    setEmail: (newEmail) => set({ email: newEmail }),
    check: false,
    setCheck: (newCheck) => set({ check: newCheck }),
}));

export default useStepperStore;
