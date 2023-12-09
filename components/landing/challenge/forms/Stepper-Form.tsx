"use client";

import { useStepperStore } from "@/data-store/stepper-store";

import { useEffect } from "react";
import { StepOne } from "../stepper-pages/StepOne";
import { StepTwo } from "../stepper-pages/StepTwo";

export function StepperForm() {
    const { step, setChallenge, setCheck, setEmail, setProgress, setStep } =
        useStepperStore();

    useEffect(() => {
        setChallenge("");
        setCheck(false);
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
