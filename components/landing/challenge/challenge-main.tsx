"use client";

import { useState } from "react";
import ChallengeIntro from "./challenge-intro";
import StepperCard from "./stepper-pages/StepperCard";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const ChallengeMain = () => {
    const [goToStepper, setGoToStepper] = useState(false);

    const readyToCodeButton = () => {
        return (
            <Button onClick={() => setGoToStepper(true)}>
                <code>Ready to code</code>
                <Code className='ml-2' />
            </Button>
        );
    };
    return (
        <>
            {!goToStepper && <ChallengeIntro button={readyToCodeButton} />}
            {goToStepper && <StepperCard />}
        </>
    );
};

export default ChallengeMain;
