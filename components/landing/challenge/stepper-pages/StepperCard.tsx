import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { StepperForm } from "../forms/Stepper-Form";
import { Badge } from "@/components/ui/badge";

export function StepperCard() {
    return (
        <Card className='mx-auto h-[420px] rounded-2xl'>
            <CardHeader>
                <CardTitle className='mb-4'>
                    <div className='flex justify-between'>
                        <p>Try Out A Coding Challenge!</p>
                        <Badge className='bg-blue-400'>Alpha</Badge>
                    </div>
                </CardTitle>
                <CardDescription>
                    It&apos;s simple. Give us an email, accept the TOS, and
                    select a challenge.
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
