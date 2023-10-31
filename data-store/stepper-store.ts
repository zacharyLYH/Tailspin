import { create } from "zustand";

interface StepperStore {
    progress: number;
    setProgress: (newProgress: number) => void;

    step: number;
    setStep: (newStep: number) => void;
}

const useStepperStore = create<StepperStore>((set) => ({
    progress: 0,
    setProgress: (newProgress) => set({ progress: newProgress }),
    step: 1,
    setStep: (newStep) => set({ step: newStep }),
}));

export default useStepperStore;
