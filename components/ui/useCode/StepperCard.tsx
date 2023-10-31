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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useResetFeState } from "@/lib/reset-fe-state";
import { useRouter } from "next/navigation";
import TermsOfServiceBox from "./Terms-of-Service";
import useStepperStore from "@/data-store/stepper-store";

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

            <CardContent>
                <TermsOfServiceBox />
            </CardContent>
            <CardFooter className='flex justify-end'>
                <Button
                    variant='ghost'
                    className='mx-3 font-semibold text-muted-foreground'
                >
                    Continue
                </Button>
            </CardFooter>
        </Card>
    );
}

export default StepperCard;
