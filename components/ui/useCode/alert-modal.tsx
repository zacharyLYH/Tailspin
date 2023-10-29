"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useResetFeState } from "@/lib/reset-fe-state";
import { useRouter } from "next/navigation";
import TermsOfServiceBox from "./Terms-of-Service";

export function EnterCodeArea() {
    const router = useRouter();
    const handleReset = useResetFeState();

    const exitClicked = () => {
        handleReset();
        router.push("/");
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant='ghost'
                    className='mx-3 font-semibold text-muted-foreground'
                >
                    Enter
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='h-1/2 flex-row'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='self-center'>
                        Before you can code...
                    </AlertDialogTitle>
                    <TermsOfServiceBox />

                    <AlertDialogDescription>
                        Have you read the terms of service?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className='bg-orange-500'
                        onClick={exitClicked}
                    >
                        Contiune
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default EnterCodeArea;
