"use client";

import useStepperStore from "@/data-store/stepper-store";

import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

export function StepperEmailForm() {
    const { step } = useStepperStore();

    if (step === 1) {
        return <StepOne />;
    } else {
        return <StepTwo />;
    }
}
