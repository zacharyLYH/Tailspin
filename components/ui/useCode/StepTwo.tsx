import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useStepperStore from "@/data-store/stepper-store";
import { FormSubmitting } from "./Submitting";
import useSessionStore from "@/data-store/session-store";
import LandingPageCode from "@/components/landing/test-challenges/placeholder-code";
import { useRouter } from "next/navigation";
import { ChallengeFormField } from "./Challenge-FormField";

const formStepTwoSchema = z.object({
    challenge: z.enum(
        ["helloWorld", "simpleDialog", "simpleNavBar", "brightSunnyDay"],
        {
            required_error: "Please select a challenge",
        }
    ),
});

export function StepTwo() {
    const PROGRESS_INCREMENT: number = 33;
    const { setChallenge } = useStepperStore();
    const { progress, setProgress } = useStepperStore();
    const { setStep, step } = useStepperStore();

    const { setCode } = useSessionStore();

    const router = useRouter();

    const form = useForm<z.infer<typeof formStepTwoSchema>>({
        resolver: zodResolver(formStepTwoSchema),
    });

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
        </div>
    );
}
