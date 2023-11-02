"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import useStepperStore from "@/data-store/stepper-store";
import { StepperEmailForm } from "./Stepper-Email-Form";

export function StepperCard() {
    const { progress } = useStepperStore();

    return (
        <Card className='mx-auto w-full md:w-3/4' id='codeEnterance'>
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
