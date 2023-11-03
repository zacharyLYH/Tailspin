"use client";

import StarComponent from "@/components/ui/star-component";
import { useRatingStore } from "@/data-store/rating-store";

const OverallRating = () => {
    const rating = useRatingStore((state) => state.overallRating);
    const setRating = useRatingStore((state) => state.setOverallRating);

    return (
        <div>
            <h4 className='mb-2 text-xl'>Overall Rating:</h4>
            <StarComponent rating={rating} setRating={setRating} />
            <div className='mt-2 flex flex-row'>
                <span>{rating}/5</span>
                <button
                    className=' text-md ml-3 underline '
                    onClick={() => setRating(0)}
                >
                    0 stars no rizz
                </button>
            </div>
        </div>
    );
};

export default OverallRating;
