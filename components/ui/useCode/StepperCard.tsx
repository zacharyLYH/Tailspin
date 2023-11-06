import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { StepperForm } from "./Stepper-Form";

export function StepperCard() {
    return (
        <Card className='mx-auto h-[420px] w-full md:w-3/4'>
            <CardHeader className=''>
                <CardTitle className='mb-4'>
                    Try One Of Our Coding Challenges!!!
                </CardTitle>
                <CardDescription>
                    {" "}
                    Here at TailSpin, we like to have fun! <br /> By filling out
                    this form, you can use our code editor and attempt to do an
                    awesome Tailwind UI challenge!
                </CardDescription>
                <Progress />
            </CardHeader>

            <CardContent>
                <StepperForm />
            </CardContent>
        </Card>
    );
}

export default StepperCard;