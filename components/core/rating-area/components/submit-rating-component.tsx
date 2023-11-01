"use client";

import { usePutRating } from "@/client-side-queries/rq-queries/rating-submit";
import { Button } from "@/components/ui/button";
import { useRatingStore } from "@/data-store/rating-store";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const RatingSubmitButton = () => {
    const { uxRating, overallRating, funRating } = useRatingStore();
    const [submittingRating, setSubmittingRating] = useState(false);
    const mutation = usePutRating([uxRating, overallRating, funRating]);

    const handleSubmitButtonClick = () => {
        try {
            setSubmittingRating(true);
            mutation.mutate();
            toast.success("We really appreciated your help!");
        } catch (error) {
            toast.error("Something went wrong...");
        } finally {
            setSubmittingRating(false);
        }
    };

    return (
        <Button onClick={handleSubmitButtonClick}>
            {submittingRating ? (
                <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />{" "}
                    Submitting...
                </>
            ) : (
                <>
                    <Check className='mr-2 h-4 w-4' /> Don&apos;t forget to hit
                    submit!
                </>
            )}
        </Button>
    );
};

export default RatingSubmitButton;
