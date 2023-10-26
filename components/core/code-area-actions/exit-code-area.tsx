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
import { Button } from "@/components/ui/button";
import { useResetFeState } from "@/lib/reset-fe-state";
import { useRouter } from "next/navigation";

export function ExitCodeArea() {
    const router = useRouter();
    const handleReset = useResetFeState();

    const exitClicked = () => {
        handleReset();
        router.push("/");
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='outline' className='bg-red-500'>
                    Exit
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. Your progress will be
                        lost!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className='bg-red-500'
                        onClick={exitClicked}
                    >
                        EXIT
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ExitCodeArea;
