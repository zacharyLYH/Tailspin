"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import useStepperStore from "@/data-store/stepper-store";
import { StepperForm } from "./Stepper-Form";

export function StepperCard() {
    const { progress } = useStepperStore();

    return (
        <Card className='mx-auto h-[400px] w-full align-bottom md:w-3/4'>
            <CardHeader className='space-y-5'>
                <CardTitle className='mb-4'>
                    Try One Of Our Coding Challenges!!!
                </CardTitle>
                <CardDescription>
                    {" "}
                    Here at TailSpin, we like to have fun! <br /> By filling out
                    this form, you can use our code editor and attempt to do an
                    awesome Tailwind UI challenge!
                </CardDescription>
                <Progress value={progress} className='mt-[30px]' />
            </CardHeader>

            <CardContent>
                <StepperForm />
            </CardContent>
        </Card>
    );
}

export default StepperCard;
