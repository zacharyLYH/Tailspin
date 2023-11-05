"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import useStepperStore from "@/data-store/stepper-store";
import Link from "next/link";
import useSessionStore from "@/data-store/session-store";
import { useRouter } from "next/navigation";
import LandingPageCode from "@/components/landing/test-challenges/placeholder-code";
import { EmailFormField } from "./Email-FormField";
import { TOSFormField } from "./TOS-FormField";
import { FormSubmitting } from "./Submitting";
import SubmitButton from "@/components/core/code-area-actions/submit-button";

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    accept: z.literal<boolean>(true, {
        errorMap: () => ({ message: "You must accept the terms & conditions" }),
    }),
});

export function StepperEmailForm() {
    const PROGRESS_INCREMENT: number = 25;
    const { email, setEmail } = useStepperStore();
    const { check, setCheck } = useStepperStore();
    const { progress, setProgress } = useStepperStore();
    const { step, setStep } = useStepperStore();
    const { setCode } = useSessionStore();
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
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

            if (step === 2) {
                router.push("/code-area");
            }
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
                    onSubmit={form.handleSubmit(onSubmit)}
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
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='w-full space-y-8 p-5'
                >
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='mb-[1px]'>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='tailspin.official@gmail.com'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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
    }
}
