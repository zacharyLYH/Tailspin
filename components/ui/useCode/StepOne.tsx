import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useStepperStore from "@/data-store/stepper-store";
import { EmailFormField } from "./Email-FormField";
import { TOSFormField } from "./TOS-FormField";
import { FormSubmitting } from "./Submitting";

const formStepOneSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    accept: z.literal<boolean>(true, {
        errorMap: () => ({ message: "You must accept the terms & conditions" }),
    }),
});

export function StepOne() {
    const PROGRESS_INCREMENT: number = 33;
    const { setEmail } = useStepperStore();
    const { setCheck } = useStepperStore();
    const { progress, setProgress } = useStepperStore();
    const { step, setStep } = useStepperStore();

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
                setProgress(progress + PROGRESS_INCREMENT);
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
                    <FormSubmitting />
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
