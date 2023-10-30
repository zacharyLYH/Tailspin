"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useResetFeState } from "@/lib/reset-fe-state";
import { useRouter } from "next/navigation";
import TermsOfServiceBox from "./Terms-of-Service";

export function StepperCard() {
    const router = useRouter();
    const handleReset = useResetFeState();

    const exitClicked = () => {
        handleReset();
        router.push("/");
    };

    return (
        <Card className='mx-auto w-1/2'>
            <CardHeader>
                <CardTitle>Before You Can Code....</CardTitle>
            </CardHeader>

            <CardContent>
                <TermsOfServiceBox />
            </CardContent>
            <CardFooter>
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
