"use client";

import { useStepperStore } from "@/data-store/stepper-store";

import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { useEffect } from "react";

export function StepperForm() {
    const { step, setChallenge, setCheck, setEmail, setProgress, setStep } =
        useStepperStore();

    useEffect(() => {
        setChallenge("");
        setCheck(true);
        setEmail("");
        setProgress(0);
        setStep(1);
    }, []);

    if (step === 1) {
        return <StepOne />;
    } else {
        return <StepTwo />;
    }
}
