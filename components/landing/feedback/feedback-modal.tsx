import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FeedbackForm } from "./feedback-form";

export function FeedbackModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <span className='mx-1 hover:cursor-pointer'> 🌝 </span>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Feedback ✏️</DialogTitle>
                    <DialogDescription>
                        You&apos;re making Tailspin a better app. Everybody
                        thanks you!
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <FeedbackForm />
                </div>
            </DialogContent>
        </Dialog>
    );
}
