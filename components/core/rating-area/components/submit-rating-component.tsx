"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// TODO: Get all the rating zustand states. Do an api call with the ratings and in the api routes, implement logic to generate an aggregate
const RatingSubmitButton = () => {
    return (
        <Button className='w-full'>
            <Check className='mr-2 h-4 w-4' /> Send it in
        </Button>
    );
};

export default RatingSubmitButton;
