import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
    progressIncrements,
    useStepperStore,
} from "@/data-store/stepper-store";
import useSessionStore from "@/data-store/session-store";
import LandingPageCode from "@/components/landing/test-challenges/placeholder-code";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { challengeEnum } from "@/data-store/challenge-store";
import { saveToLocalStorage } from "@/lib/localStorage";
import { ChallengeFormField } from "../forms/Challenge-FormField";

const formStepTwoSchema = z.object({
    challenge: z.nativeEnum(challengeEnum, {
        errorMap: (issue) => {
            switch (issue.code) {
                case "invalid_type":
                    return { message: "Please select a challenge!" };
                default:
                    return {
                        message:
                            "This is not a valid challenge, select a different challenge!",
                    };
            }
        },
    }),
});

export function StepTwo() {
    const { progress, setProgress, step, setStep, setChallenge, email } =
        useStepperStore();
    const { setCode } = useSessionStore();

    const router = useRouter();

    const form = useForm<z.infer<typeof formStepTwoSchema>>({
        resolver: zodResolver(formStepTwoSchema),
    });

    async function onSubmit(values: z.infer<typeof formStepTwoSchema>) {
        if (step === 2) {
            const selection: string = values.challenge;
            setCode(LandingPageCode());
            setChallenge(selection);
            setProgress(progress + progressIncrements);
            saveToLocalStorage("email", email);
            saveToLocalStorage("challenge", selection);
            router.push("/code-area");
        }
    }

    async function onBack() {
        setProgress(progress - progressIncrements);
        setStep(step - 1);
    }

    return (
        <div className='m-auto'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='w-full space-y-8 p-5'
                >
                    <ChallengeFormField />

                    <Button
                        variant='ghost'
                        className='self float-left font-semibold text-muted-foreground'
                        onClick={() => onBack()}
                    >
                        Previous
                    </Button>
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
                            Submit
                        </Button>
                    )}
                </form>
            </Form>
        </div>
    );
}
