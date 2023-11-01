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
import { Loader2 } from "lucide-react";
import useStepperStore from "@/data-store/stepper-store";
import TermsOfServiceBox from "./Terms-of-Service";

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
});

export function StepperEmailForm() {
    const { email, setEmail } = useStepperStore();
    const { check, setCheck } = useStepperStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const userEmail = JSON.stringify(values.email);
        console.log("user email is", userEmail);
        setEmail(userEmail);
        console.log(email);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
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

                <TermsOfServiceBox />

                {form.formState.isSubmitting ? (
                    <Button disabled>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Submitting...
                    </Button>
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
