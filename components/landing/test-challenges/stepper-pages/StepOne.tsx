import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
    useStepperStore,
    progressIncrements,
} from "@/data-store/stepper-store";
import { EmailFormField } from "../forms/Email-FormField";
import { TOSFormField } from "../forms/TOS-FormField";
import { Loader2 } from "lucide-react";

export function StepOne() {
    const {
        progress,
        setProgress,
        step,
        setStep,
        email,
        setEmail,
        check,
        setCheck,
    } = useStepperStore();

    const formStepOneSchema = z.object({
        email: z
            .string()
            .email({
                message: "Invalid email address.",
            })
            .default(email),

        accept: z
            .literal<boolean>(true, {
                errorMap: () => ({
                    message: "You must accept the terms & conditions",
                }),
            })
            .default(check),
    });

    const form = useForm<z.infer<typeof formStepOneSchema>>({
        resolver: zodResolver(formStepOneSchema),
    });

    async function onContinue(values: z.infer<typeof formStepOneSchema>) {
        setCheck(values.accept);

        if (values.accept === true) {
            const userEmail: string = values.email;
            setEmail(userEmail);
            setCheck(values.accept);

            if (step === 1) {
                setProgress(progress + progressIncrements);
                setStep(step + 1);
            }
        }
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onContinue)}
                className='w-full space-y-4 p-5'
            >
                <EmailFormField />
                <TOSFormField />

                {form.formState.isSubmitting ? (
                    <Button disabled>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Submitting...
                    </Button>
                ) : (
                    <Button
                        type='submit'
                        variant='ghost'
                        className='float-right font-semibold text-muted-foreground'
                    >
                        Continue
                    </Button>
                )}
            </form>
        </Form>
    );
}
