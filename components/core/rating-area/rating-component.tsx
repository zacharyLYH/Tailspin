"use client";

import { loadFromLocalStorage } from "@/lib/localStorage";
import RatingBodyServer from "./rating-component-server";

const RatingBody = () => {
    const rated = loadFromLocalStorage("rating");

    if (!rated) {
        return <RatingBodyServer />;
    } else {
        return (
            <p className='my-4 text-center text-sm font-bold text-muted-foreground'>
                You've already rated Tailspin. Thanks!
            </p>
        );
    }
};

export default RatingBody;
