"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name must be at least 1 character.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    message: z.string().min(1, {
        message: "Message must be at least 1 character.",
    }),
});

export function FeedbackForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const resp = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (resp.status === 200) {
                toast.success("Email sent!");
            } else {
                toast.success("Something went wrong.");
            }
        } catch (error) {
            console.log(error);
            toast.success("Something went wrong.");
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder='John Ligma' {...field} />
                            </FormControl>
                            <FormDescription>
                                How should we address you?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                            <FormDescription>
                                We&apos;ll reply you via the provided email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Feedback</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Some (hopefully) constructive feedback...'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You are directly contributing to Tailspin!
                            </FormDescription>
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
                    <Button type='submit'>Submit 🎉</Button>
                )}
            </form>
        </Form>
    );
}
