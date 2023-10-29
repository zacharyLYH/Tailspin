"use client";

import StarComponent from "@/components/ui/star-component";
import { useRatingStore } from "@/data-store/rating-store";

const OverallRating = () => {
    const rating = useRatingStore((state) => state.overallRating);
    const setRating = useRatingStore((state) => state.setOverallRating);

    return (
        <div className='p-10'>
            <h1 className='mb-4 text-xl'>Overall Rating:</h1>
            <StarComponent rating={rating} setRating={setRating} />
            <div className='mt-4 flex flex-row'>
                <span>{rating}/5</span>
                <button
                    className=' text-md ml-3 underline '
                    onClick={() => setRating(0)}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default OverallRating;
