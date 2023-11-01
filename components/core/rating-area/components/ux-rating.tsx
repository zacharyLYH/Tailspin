"use client";

import StarComponent from "@/components/ui/star-component";
import { useRatingStore } from "@/data-store/rating-store";

const UxRating = () => {
    const rating = useRatingStore((state) => state.uxRating);
    const setRating = useRatingStore((state) => state.setUxRating);

    return (
        <div>
            <h1 className='mb-2 text-xl'>How was the user experience:</h1>
            <StarComponent rating={rating} setRating={setRating} />
            <div className='mt-2 flex flex-row'>
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

export default UxRating;
