"use client";

import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { handleSubmitIncrement } from "../../landing/handlers/submitIncrementHandler";
import { useRouter } from "next/navigation";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useResetFeState } from "@/lib/reset-fe-state";

const smallProps: ConfettiProps = {
    force: 0.6,
    duration: 1900,
    particleCount: 400,
    width: 1200,
    zIndex: 50,
};

const SubmitButton = () => {
    const router = useRouter();
    const [submitClicked, setSubmitClicked] = useState(false);
    const [continueClicked, setContinueClicked] = useState(false);
    const handleReset = useResetFeState();

    const handleSubmitButtonClick = () => {
        try {
            setSubmitClicked(true);
            handleSubmitIncrement();
        } catch (error) {
            alert("Something went wrong. Error");
        }
    };

    const handleContinueButtonClick = () => {
        setContinueClicked(true);
        handleReset();
        router.push("/");
    };

    return (
        <>
            <Button onClick={handleSubmitButtonClick}>Submit</Button>
            {submitClicked && (
                <AlertDialog open>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Congratulations on submitting!
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                <ConfettiExplosion {...smallProps} />
                                Click continue to navigate back to the home
                                page.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction
                                className='bg-orange-500'
                                onClick={handleContinueButtonClick}
                                disabled={continueClicked}
                            >
                                {continueClicked
                                    ? "Redirecting..."
                                    : "Continue"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </>
    );
};

export default SubmitButton;
