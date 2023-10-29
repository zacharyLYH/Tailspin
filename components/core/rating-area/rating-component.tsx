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

const RatingBody = () => {
    return (
        <div className='flex min-h-screen items-center justify-center lg:m-6'>
            <Card className='w-1/2 border-white'>
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
                        <OverallRating />
                        <OverallRating />
                        <OverallRating />
                        <OverallRating />
                    </Grid>
                </CardContent>
                <CardFooter>
                    <RatingSubmitButton />
                </CardFooter>
            </Card>
        </div>
    );
};

export default RatingBody;
