"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetFooter,
    SheetClose,
    SheetTrigger,
} from "@/components/ui/sheet";
import SubmitButton from "@/components/core/code-area-actions/submit-button";
import SettingsPage from "./code-area-settings";
import ExitCodeArea from "./exit-code-area";
import { Button } from "@/components/ui/button";
import CodeAreaFormatCode from "./code-area-formatCode";

const CodeAreaActions = () => {
    return (
        <Sheet>
            <SheetTrigger className='w-full'>
                <Button className='w-full bg-purple-500 text-white hover:bg-green-500'>
                    Actions
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Actions</SheetTitle>
                    <SheetDescription>
                        Click anywhere outside the sheet when you&apos;re done!
                    </SheetDescription>
                </SheetHeader>
                <div className='flex flex-col gap-4'>
                    <CodeAreaFormatCode />
                    <SettingsPage />
                    <SubmitButton />
                    <ExitCodeArea />
                </div>
                <SheetFooter className='mt-4'>
                    <SheetClose asChild>
                        <Button type='submit'>Back</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default CodeAreaActions;
