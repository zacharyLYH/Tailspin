import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import OverallRating from "./components/overall-rating";
import Grid from "./util/arrange-rating-sections";
import RatingSubmitButton from "./components/submit-rating-component";
import UxRating from "./components/ux-rating";
import FunRating from "./components/fun-rating";
import { FeedbackModal } from "@/components/landing/feedback/feedback-modal";

/*
Ratings are stored as per the following schema:
<Name of rating> : <Total Score-Number of rates>

For example:
- Overall_Rating : 500-100
    - This states that we currently have a total score of 500 over 100 ratings. Which means, on average, we get 5 stars from every rating.
- Ux_Rating : 100-30
    - Implies we have about 3.3333333... stars per rate
- Fun_Rating : 0-2345
    - We got 0 stars on average
*/
const RatingBody = () => {
    return (
        <div className='m-2 flex min-h-[60vh] items-center justify-center lg:m-6'>
            <Card className='border-white lg:w-1/2'>
                <CardHeader>
                    <CardTitle>Rate Tailspin</CardTitle>
                    <CardDescription>
                        30 seconds of your time could translates to a lot of
                        feedback for the team!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Grid>
                        <OverallRating />
                        <UxRating />
                        <FunRating />
                    </Grid>
                </CardContent>
                <CardFooter className='flex flex-col justify-between lg:flex-row'>
                    <div className='mb-4 w-[300] rounded-xl border border-white p-2 font-semibold text-muted-foreground md:mb-0'>
                        <FeedbackModal buttonName='(Optionally) Give us more feedback!' />
                    </div>
                    <RatingSubmitButton />
                </CardFooter>
            </Card>
        </div>
    );
};

export default RatingBody;
