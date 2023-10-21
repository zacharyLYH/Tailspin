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
import { useFormatCode } from "@/lib/codeFormatter";
import SubmitButton from "@/components/ui/submit-button";
import { Button } from "@/components/ui/button";

const CodeAreaActions = () => {
    const { handleFormatCode } = useFormatCode();

    return (
        <Sheet>
            <SheetTrigger>
                <Button className='bg-purple-500 text-white'>Actions</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Actions</SheetTitle>
                    <SheetDescription>
                        Click anywhere outside the sheet when you're done!
                    </SheetDescription>
                </SheetHeader>
                <div className='flex flex-col gap-4'>
                    <Button
                        onClick={handleFormatCode}
                        className='bg-purple-500 text-white'
                    >
                        Format code
                    </Button>
                    <SubmitButton />
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
