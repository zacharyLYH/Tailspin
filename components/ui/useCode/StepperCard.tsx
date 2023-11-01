"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { useResetFeState } from "@/lib/reset-fe-state";
import { useRouter } from "next/navigation";
import useStepperStore from "@/data-store/stepper-store";
import { StepperEmailForm } from "./Stepper-Email-Form";

export function StepperCard() {
    const { progress, setProgress } = useStepperStore();

    const router = useRouter();
    const handleReset = useResetFeState();

    const exitClicked = () => {
        handleReset();
        router.push("/");
    };

    return (
        <Card className='mx-auto w-full md:w-3/4'>
            <CardHeader>
                <CardTitle className='mb-4'>Before You Can Code....</CardTitle>
                <Progress value={progress} />
            </CardHeader>

            <CardContent className='flex'>
                <StepperEmailForm />
            </CardContent>
        </Card>
    );
}

export default StepperCard;
