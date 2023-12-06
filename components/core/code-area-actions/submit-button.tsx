"use client";

import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { codeSubmission } from "@/client-side-queries/rq-queries/code-submit";
import useSessionStore from "@/data-store/session-store";
import { useStepperStore } from "@/data-store/stepper-store";
import { loadFromLocalStorage } from "@/lib/localStorage";

const smallProps: ConfettiProps = {
    force: 0.6,
    duration: 1900,
    particleCount: 400,
    width: 1200,
    zIndex: 50,
};

function getCurrentDateTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const isPm = hours >= 12;

    const formattedHours = isPm
        ? hours > 12
            ? hours - 12
            : hours
        : hours === 0
        ? 12
        : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const amPm = isPm ? "PM" : "AM";

    const month = now.getMonth() + 1; // Month is 0-indexed
    const day = now.getDate();
    const year = now.getFullYear();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedMonth}/${formattedDay}/${year} ${formattedHours}:${formattedMinutes} ${amPm}`;
}

const SubmitButton = () => {
    const router = useRouter();
    const [submitClicked, setSubmitClicked] = useState(false);
    const [continueClicked, setContinueClicked] = useState(false);
    const handleReset = useResetFeState();
    const { code } = useSessionStore();
    const { challenge, email } = useStepperStore();

    const handleSubmitButtonClick = async () => {
        try {
            const dateTime = getCurrentDateTime();

            const submitEmail = email ? email : loadFromLocalStorage("email");
            const submitChallenge = challenge
                ? challenge
                : loadFromLocalStorage("challenge");
            await codeSubmission({
                code,
                dateTime,
                email: submitEmail,
                challenge: submitChallenge,
            });
            setSubmitClicked(true);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    };

    const handleContinueButtonClick = () => {
        handleReset();
        setContinueClicked(true);
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
