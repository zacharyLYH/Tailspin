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
import Link from "next/link";
import useSessionStore from "@/data-store/session-store";
import { useRouter } from "next/navigation";
import LandingPageCode from "@/components/landing/test-challenges/placeholder-code";

let checked: boolean = false;

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    accept: z.literal<boolean>(true, {
        errorMap: () => ({ message: "You must accept the terms & conditions" }),
    }),
});

export function StepperEmailForm() {
    const { email, setEmail } = useStepperStore();
    const { check, setCheck } = useStepperStore();
    const { progress, setProgress } = useStepperStore();
    const { setCode } = useSessionStore();
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setCheck(values.accept);

        if (values.accept === true) {
            const userEmail = values.email;
            setEmail(userEmail);
            setCheck(values.accept);
            setCode(LandingPageCode());
            router.push("/code-area");
        }
    }

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

                <FormField
                    control={form.control}
                    name='accept'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='flex'>
                                    <Input
                                        type='checkbox'
                                        checked={field.value}
                                        onChange={field.onChange}
                                        onClick={() => {
                                            checked = !checked;
                                            setCheck(checked);
                                            setProgress(
                                                checked
                                                    ? progress + 25
                                                    : progress - 25
                                            );
                                        }}
                                        className='peer mr-[10px] mt-[5px] h-4 w-[20px] cursor-pointer'
                                    />
                                    <label>
                                        By checking the box, you are confirming
                                        that you have read and agree to&nbsp;
                                        {/* TODO: Replace this to link to a seperate page for Terms and Services */}
                                        <Link
                                            href='https://www.google.com'
                                            className='italic text-blue-500 underline'
                                        >
                                            Tailspin&apos;s terms &amp;
                                            conditions.
                                        </Link>
                                    </label>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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
