"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import useStepperStore from "@/data-store/stepper-store";
import useSessionStore from "@/data-store/session-store";
import { useRouter } from "next/navigation";
import LandingPageCode from "@/components/landing/test-challenges/placeholder-code";
import { EmailFormField } from "./Email-FormField";
import { TOSFormField } from "./TOS-FormField";
import { FormSubmitting } from "./Submitting";
import { ChallengeFormField } from "./Challenge-FormField";

const formStepOneSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    accept: z.literal<boolean>(true, {
        errorMap: () => ({ message: "You must accept the terms & conditions" }),
    }),
});

const formStepTwoSchema = z.object({
    challenge: z.enum(
        ["helloWorld", "simpleDialog", "simpleNavBar", "brightSunnyDay"],
        {
            required_error: "Please select a challenge",
        }
    ),
});

export function StepperEmailForm() {
    const PROGRESS_INCREMENT: number = 33;
    const { email, setEmail } = useStepperStore();
    const { check, setCheck } = useStepperStore();
    const { progress, setProgress } = useStepperStore();
    const { step, setStep } = useStepperStore();
    const { setCode } = useSessionStore();
    const { challenge, setChallenge } = useStepperStore();
    const router = useRouter();

    const form = useForm<z.infer<typeof formStepOneSchema>>({
        resolver: zodResolver(formStepOneSchema),
    });

    const formTwo = useForm<z.infer<typeof formStepTwoSchema>>({
        resolver: zodResolver(formStepTwoSchema),
    });

    async function onContinue(values: z.infer<typeof formStepOneSchema>) {
        setCheck(values.accept);

        if (values.accept === true) {
            const userEmail: string = values.email;
            setEmail(userEmail);
            setCheck(values.accept);
            setCode(LandingPageCode());

            if (step === 1) {
                setProgress(progress + PROGRESS_INCREMENT);
                setStep(step + 1);
            }
        }
    }

    async function onSubmit(values: z.infer<typeof formStepTwoSchema>) {
        console.log("onSubmit called");
        if (step === 2) {
            const selection: string = values.challenge;
            console.log(selection);
            setCode(LandingPageCode());
            setChallenge(selection);
            setProgress(progress + PROGRESS_INCREMENT);

            router.push("/code-area");
        }
    }

    async function onBack() {
        setProgress(progress - PROGRESS_INCREMENT);
        setStep(step - 1);
    }

    if (step === 1) {
        return (
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onContinue)}
                    className='w-full space-y-8 p-5'
                >
                    <EmailFormField />
                    <TOSFormField />

                    {form.formState.isSubmitting ? (
                        <FormSubmitting />
                    ) : (
                        <Button
                            type='submit'
                            variant='ghost'
                            className='self float-right font-semibold text-muted-foreground'
                        >
                            Continue
                        </Button>
                    )}
                </form>
            </Form>
        );
    } else {
        return (
            <Form {...formTwo}>
                <form
                    onSubmit={formTwo.handleSubmit(onSubmit)}
                    className='w-full space-y-8 p-5'
                >
                    <ChallengeFormField />
                    {formTwo.formState.isSubmitting ? (
                        <FormSubmitting />
                    ) : (
                        <Button
                            type='submit'
                            variant='ghost'
                            className='self float-right font-semibold text-muted-foreground'
                        >
                            Submit
                        </Button>
                    )}
                </form>
            </Form>
        );
    }
}
